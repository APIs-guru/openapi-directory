import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApikeysProjectsLocationsKeysGetKeyStringPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApikeysProjectsLocationsKeysGetKeyStringQueryParams extends SpeakeasyBase {
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
export declare class ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysGetKeyStringSecurity extends SpeakeasyBase {
    option1?: ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1;
    option2?: ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2;
}
export declare class ApikeysProjectsLocationsKeysGetKeyStringRequest extends SpeakeasyBase {
    pathParams: ApikeysProjectsLocationsKeysGetKeyStringPathParams;
    queryParams: ApikeysProjectsLocationsKeysGetKeyStringQueryParams;
    security: ApikeysProjectsLocationsKeysGetKeyStringSecurity;
}
export declare class ApikeysProjectsLocationsKeysGetKeyStringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    v2GetKeyStringResponse?: shared.V2GetKeyStringResponse;
}
