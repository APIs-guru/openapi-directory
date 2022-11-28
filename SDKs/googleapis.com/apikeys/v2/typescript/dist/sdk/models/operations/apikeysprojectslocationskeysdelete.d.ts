import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApikeysProjectsLocationsKeysDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApikeysProjectsLocationsKeysDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApikeysProjectsLocationsKeysDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysDeleteRequest extends SpeakeasyBase {
    pathParams: ApikeysProjectsLocationsKeysDeletePathParams;
    queryParams: ApikeysProjectsLocationsKeysDeleteQueryParams;
    security: ApikeysProjectsLocationsKeysDeleteSecurity;
}
export declare class ApikeysProjectsLocationsKeysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
