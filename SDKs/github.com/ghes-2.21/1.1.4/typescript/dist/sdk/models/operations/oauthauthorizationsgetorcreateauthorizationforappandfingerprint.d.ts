import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams extends SpeakeasyBase {
    clientId: string;
    fingerprint: string;
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody extends SpeakeasyBase {
    clientSecret: string;
    note?: string;
    noteUrl?: string;
    scopes?: string[];
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest extends SpeakeasyBase {
    pathParams: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams;
    request?: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody;
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    authorization?: shared.Authorization;
    validationError?: shared.ValidationError;
}
