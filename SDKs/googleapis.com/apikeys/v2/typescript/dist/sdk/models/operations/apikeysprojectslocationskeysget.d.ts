import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApikeysProjectsLocationsKeysGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApikeysProjectsLocationsKeysGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApikeysProjectsLocationsKeysGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysGetSecurity extends SpeakeasyBase {
    option1?: ApikeysProjectsLocationsKeysGetSecurityOption1;
    option2?: ApikeysProjectsLocationsKeysGetSecurityOption2;
}
export declare class ApikeysProjectsLocationsKeysGetRequest extends SpeakeasyBase {
    pathParams: ApikeysProjectsLocationsKeysGetPathParams;
    queryParams: ApikeysProjectsLocationsKeysGetQueryParams;
    security: ApikeysProjectsLocationsKeysGetSecurity;
}
export declare class ApikeysProjectsLocationsKeysGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    v2Key?: shared.V2Key;
}
