import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsCreateAuthorizationRequestBody extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    fingerprint?: string;
    note?: string;
    noteUrl?: string;
    scopes?: string[];
}
export declare class OauthAuthorizationsCreateAuthorizationRequest extends SpeakeasyBase {
    request?: OauthAuthorizationsCreateAuthorizationRequestBody;
}
export declare class OauthAuthorizationsCreateAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    authorization?: shared.Authorization;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
