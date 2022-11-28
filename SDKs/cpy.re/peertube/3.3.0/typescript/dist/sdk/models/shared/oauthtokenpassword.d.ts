import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OAuthTokenPasswordGrantTypeEnum {
    Password = "password",
    RefreshToken = "refresh_token"
}
export declare class OAuthTokenPassword extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: OAuthTokenPasswordGrantTypeEnum;
    password: string;
    username: string;
}
