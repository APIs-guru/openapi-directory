import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateStandardsControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=StandardsControlArn" })
  standardsControlArn: string;
}


export class UpdateStandardsControlHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum UpdateStandardsControlRequestBodyControlStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class UpdateStandardsControlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlStatus" })
  controlStatus?: UpdateStandardsControlRequestBodyControlStatusEnum;

  @Metadata({ data: "json, name=DisabledReason" })
  disabledReason?: string;
}


export class UpdateStandardsControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateStandardsControlPathParams;

  @Metadata()
  headers: UpdateStandardsControlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateStandardsControlRequestBody;
}


export class UpdateStandardsControlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateStandardsControlResponse?: Map<string, any>;
}
