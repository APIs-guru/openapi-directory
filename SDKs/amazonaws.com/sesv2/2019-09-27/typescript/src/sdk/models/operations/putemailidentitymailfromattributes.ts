import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutEmailIdentityMailFromAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityMailFromAttributesHeaders extends SpeakeasyBase {
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

export enum PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum {
    UseDefaultValue = "USE_DEFAULT_VALUE"
,    RejectMessage = "REJECT_MESSAGE"
}


export class PutEmailIdentityMailFromAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BehaviorOnMxFailure" })
  behaviorOnMxFailure?: PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;

  @Metadata({ data: "json, name=MailFromDomain" })
  mailFromDomain?: string;
}


export class PutEmailIdentityMailFromAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmailIdentityMailFromAttributesPathParams;

  @Metadata()
  headers: PutEmailIdentityMailFromAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityMailFromAttributesRequestBody;
}


export class PutEmailIdentityMailFromAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putEmailIdentityMailFromAttributesResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
