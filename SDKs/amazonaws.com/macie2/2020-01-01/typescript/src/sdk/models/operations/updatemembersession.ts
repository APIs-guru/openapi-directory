import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMemberSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateMemberSessionHeaders extends SpeakeasyBase {
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

export enum UpdateMemberSessionRequestBodyStatusEnum {
    Paused = "PAUSED",
    Enabled = "ENABLED"
}


export class UpdateMemberSessionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateMemberSessionRequestBodyStatusEnum;
}


export class UpdateMemberSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMemberSessionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateMemberSessionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateMemberSessionRequestBody;
}


export class UpdateMemberSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateMemberSessionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
