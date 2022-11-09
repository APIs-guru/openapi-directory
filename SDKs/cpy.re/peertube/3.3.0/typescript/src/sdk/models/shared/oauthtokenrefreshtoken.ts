import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OAuthTokenRefreshTokenGrantTypeEnum {
    Password = "password"
,    RefreshToken = "refresh_token"
}


export class OAuthTokenRefreshToken extends SpeakeasyBase {
  @Metadata({ data: "form, name=client_id;" })
  clientId: string;

  @Metadata({ data: "form, name=client_secret;" })
  clientSecret: string;

  @Metadata({ data: "form, name=grant_type;" })
  grantType: OAuthTokenRefreshTokenGrantTypeEnum;

  @Metadata({ data: "form, name=refresh_token;" })
  refreshToken: string;
}
