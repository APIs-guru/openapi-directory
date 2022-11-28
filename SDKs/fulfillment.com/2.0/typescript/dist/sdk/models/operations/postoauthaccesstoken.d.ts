import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum {
    Password = "password",
    RefreshToken = "refresh_token"
}
export declare enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum {
    Oms = "oms"
}
export declare class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;
    password: string;
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
    username: string;
}
export declare class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;
    refreshToken: string;
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
}
export declare class PostOauthAccessTokenAccessTokenResponseV2 extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    refreshToken?: string;
    tokenType?: string;
}
export declare class PostOauthAccessTokenRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostOauthAccessTokenResponse extends SpeakeasyBase {
    accessTokenResponseV2?: PostOauthAccessTokenAccessTokenResponseV2;
    contentType: string;
    statusCode: number;
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
