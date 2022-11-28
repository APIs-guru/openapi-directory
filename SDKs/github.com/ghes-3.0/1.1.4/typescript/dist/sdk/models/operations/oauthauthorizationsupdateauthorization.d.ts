import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsUpdateAuthorizationPathParams extends SpeakeasyBase {
    authorizationId: number;
}
export declare class OauthAuthorizationsUpdateAuthorizationRequestBody extends SpeakeasyBase {
    addScopes?: string[];
    fingerprint?: string;
    note?: string;
    noteUrl?: string;
    removeScopes?: string[];
    scopes?: string[];
}
export declare class OauthAuthorizationsUpdateAuthorizationRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsUpdateAuthorizationPathParams;
    request?: OauthAuthorizationsUpdateAuthorizationRequestBody;
}
export declare class OauthAuthorizationsUpdateAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorization?: shared.Authorization;
    validationError?: shared.ValidationError;
}
