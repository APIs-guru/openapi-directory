import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody extends SpeakeasyBase {
    clientSecret: string;
    fingerprint?: string;
    note?: string;
    noteUrl?: string;
    scopes?: string[];
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams;
    request?: OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody;
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    authorization?: shared.Authorization;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
