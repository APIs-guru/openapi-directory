import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateStandardsControlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StandardsControlArn" })
  standardsControlArn: string;
}


export class UpdateStandardsControlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateStandardsControlRequestBodyControlStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class UpdateStandardsControlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlStatus" })
  controlStatus?: UpdateStandardsControlRequestBodyControlStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=DisabledReason" })
  disabledReason?: string;
}


export class UpdateStandardsControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateStandardsControlPathParams;

  @SpeakeasyMetadata()
  headers: UpdateStandardsControlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateStandardsControlRequestBody;
}


export class UpdateStandardsControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidAccessException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateStandardsControlResponse?: Map<string, any>;
}
