import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OAuthTokenRefreshTokenGrantTypeEnum {
    Password = "password",
    RefreshToken = "refresh_token"
}


export class OAuthTokenRefreshToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType: OAuthTokenRefreshTokenGrantTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=refresh_token;" })
  refreshToken: string;
}
