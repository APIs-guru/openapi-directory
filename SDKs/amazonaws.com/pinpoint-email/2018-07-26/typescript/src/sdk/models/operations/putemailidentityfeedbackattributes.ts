import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutEmailIdentityFeedbackAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityFeedbackAttributesHeaders extends SpeakeasyBase {
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


export class PutEmailIdentityFeedbackAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailForwardingEnabled" })
  emailForwardingEnabled?: boolean;
}


export class PutEmailIdentityFeedbackAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEmailIdentityFeedbackAttributesPathParams;

  @SpeakeasyMetadata()
  headers: PutEmailIdentityFeedbackAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityFeedbackAttributesRequestBody;
}


export class PutEmailIdentityFeedbackAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putEmailIdentityFeedbackAttributesResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
