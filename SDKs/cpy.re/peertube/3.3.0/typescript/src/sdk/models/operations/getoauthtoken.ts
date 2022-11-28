import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOAuthToken200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token_expires_in" })
  refreshTokenExpiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType?: string;
}


export class GetOAuthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;
}


export class GetOAuthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOAuthToken200ApplicationJsonObject?: GetOAuthToken200ApplicationJson;
}
