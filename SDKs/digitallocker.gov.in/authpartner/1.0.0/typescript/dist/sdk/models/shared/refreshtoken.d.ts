import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RefreshTokenGrantTypeEnum {
    RefreshToken = "refresh_token"
}
export declare class RefreshToken extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: RefreshTokenGrantTypeEnum;
    refreshToken: string;
}
