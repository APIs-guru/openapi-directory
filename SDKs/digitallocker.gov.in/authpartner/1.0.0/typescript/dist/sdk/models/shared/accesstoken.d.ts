import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AccessTokenGrantTypeEnum {
    AuthorizationCode = "authorization_code"
}
export declare class AccessToken extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    code?: string;
    codeVerifier?: string;
    grantType: AccessTokenGrantTypeEnum;
    redirectUri?: string;
}
