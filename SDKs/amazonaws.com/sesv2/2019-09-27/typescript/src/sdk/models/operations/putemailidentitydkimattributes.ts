import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutEmailIdentityDkimAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityDkimAttributesHeaders extends SpeakeasyBase {
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


export class PutEmailIdentityDkimAttributesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SigningEnabled" })
  signingEnabled?: boolean;
}


export class PutEmailIdentityDkimAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEmailIdentityDkimAttributesPathParams;

  @SpeakeasyMetadata()
  headers: PutEmailIdentityDkimAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityDkimAttributesRequestBody;
}


export class PutEmailIdentityDkimAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putEmailIdentityDkimAttributesResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
