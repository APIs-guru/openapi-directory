import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMemberSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateMemberSessionHeaders extends SpeakeasyBase {
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

export enum UpdateMemberSessionRequestBodyStatusEnum {
    Paused = "PAUSED"
,    Enabled = "ENABLED"
}


export class UpdateMemberSessionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: UpdateMemberSessionRequestBodyStatusEnum;
}


export class UpdateMemberSessionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMemberSessionPathParams;

  @Metadata()
  headers: UpdateMemberSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMemberSessionRequestBody;
}


export class UpdateMemberSessionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateMemberSessionResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
