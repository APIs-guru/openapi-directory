import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutEmailIdentityDkimAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;
}


export class PutEmailIdentityDkimAttributesHeaders extends SpeakeasyBase {
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


export class PutEmailIdentityDkimAttributesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SigningEnabled" })
  signingEnabled?: boolean;
}


export class PutEmailIdentityDkimAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEmailIdentityDkimAttributesPathParams;

  @Metadata()
  headers: PutEmailIdentityDkimAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEmailIdentityDkimAttributesRequestBody;
}


export class PutEmailIdentityDkimAttributesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putEmailIdentityDkimAttributesResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
