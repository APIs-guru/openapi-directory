import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutEmailIdentityFeedbackAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityFeedbackAttributesHeaders extends SpeakeasyBase {
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


export class PutEmailIdentityFeedbackAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailForwardingEnabled" })
  emailForwardingEnabled?: boolean;
}


export class PutEmailIdentityFeedbackAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmailIdentityFeedbackAttributesPathParams;

  @Metadata()
  headers: PutEmailIdentityFeedbackAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityFeedbackAttributesRequestBody;
}


export class PutEmailIdentityFeedbackAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putEmailIdentityFeedbackAttributesResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
