import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTokenHeaders extends SpeakeasyBase {
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


export class CreateTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=deviceCode" })
  deviceCode: string;

  @Metadata({ data: "json, name=grantType" })
  grantType: string;

  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string[];
}


export class CreateTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTokenRequestBody;
}


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationPendingException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createTokenResponse?: shared.CreateTokenResponse;

  @Metadata()
  expiredTokenException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidClientException?: any;

  @Metadata()
  invalidGrantException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidScopeException?: any;

  @Metadata()
  slowDownException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedClientException?: any;

  @Metadata()
  unsupportedGrantTypeException?: any;
}
