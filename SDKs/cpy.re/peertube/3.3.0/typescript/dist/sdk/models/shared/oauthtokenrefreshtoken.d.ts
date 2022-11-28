import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OAuthTokenRefreshTokenGrantTypeEnum {
    Password = "password",
    RefreshToken = "refresh_token"
}
export declare class OAuthTokenRefreshToken extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: OAuthTokenRefreshTokenGrantTypeEnum;
    refreshToken: string;
}
