import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutEmailIdentityMailFromAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityMailFromAttributesHeaders extends SpeakeasyBase {
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

export enum PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum {
    UseDefaultValue = "USE_DEFAULT_VALUE",
    RejectMessage = "REJECT_MESSAGE"
}


export class PutEmailIdentityMailFromAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BehaviorOnMxFailure" })
  behaviorOnMxFailure?: PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;

  @SpeakeasyMetadata({ data: "json, name=MailFromDomain" })
  mailFromDomain?: string;
}


export class PutEmailIdentityMailFromAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEmailIdentityMailFromAttributesPathParams;

  @SpeakeasyMetadata()
  headers: PutEmailIdentityMailFromAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityMailFromAttributesRequestBody;
}


export class PutEmailIdentityMailFromAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putEmailIdentityMailFromAttributesResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
