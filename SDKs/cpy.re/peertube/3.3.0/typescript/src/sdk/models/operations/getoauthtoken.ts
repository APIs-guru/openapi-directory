import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOAuthTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;
}


export class GetOAuthToken200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=refresh_token_expires_in" })
  refreshTokenExpiresIn?: number;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}


export class GetOAuthTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOAuthToken200ApplicationJsonObject?: GetOAuthToken200ApplicationJson;
}
