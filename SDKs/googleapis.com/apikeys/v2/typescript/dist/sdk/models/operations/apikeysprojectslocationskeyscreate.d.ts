import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApikeysProjectsLocationsKeysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApikeysProjectsLocationsKeysCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    keyId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApikeysProjectsLocationsKeysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysCreateRequest extends SpeakeasyBase {
    pathParams: ApikeysProjectsLocationsKeysCreatePathParams;
    queryParams: ApikeysProjectsLocationsKeysCreateQueryParams;
    request?: shared.V2Key;
    security: ApikeysProjectsLocationsKeysCreateSecurity;
}
export declare class ApikeysProjectsLocationsKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
