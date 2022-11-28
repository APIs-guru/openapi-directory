import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTokenRequestBody extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    code?: string;
    deviceCode: string;
    grantType: string;
    redirectUri?: string;
    refreshToken?: string;
    scope?: string[];
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    headers: CreateTokenHeaders;
    request: CreateTokenRequestBody;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationPendingException?: any;
    contentType: string;
    createTokenResponse?: shared.CreateTokenResponse;
    expiredTokenException?: any;
    internalServerException?: any;
    invalidClientException?: any;
    invalidGrantException?: any;
    invalidRequestException?: any;
    invalidScopeException?: any;
    slowDownException?: any;
    statusCode: number;
    unauthorizedClientException?: any;
    unsupportedGrantTypeException?: any;
}
