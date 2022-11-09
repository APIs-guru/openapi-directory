import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAuthorizationCodeIdQueryParams extends SpeakeasyBase {
    codeChallenge?: string;
    codeChallengeMethod?: string;
    verifiedMobile?: number;
    clientId?: string;
    dlFlow?: string;
    redirectUri: string;
    responseType: string;
    state: string;
}
export declare class GetAuthorizationCodeIdSecurity extends SpeakeasyBase {
    oauthAuthorizeCode: shared.SchemeOauthAuthorizeCode;
}
export declare class GetAuthorizationCodeIdRequest extends SpeakeasyBase {
    queryParams: GetAuthorizationCodeIdQueryParams;
    security: GetAuthorizationCodeIdSecurity;
}
export declare class GetAuthorizationCodeIdResponse extends SpeakeasyBase {
    contentType: string;
    sample?: any;
    statusCode: number;
}
