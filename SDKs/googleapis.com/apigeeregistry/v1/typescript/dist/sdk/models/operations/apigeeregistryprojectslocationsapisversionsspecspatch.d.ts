import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsSpecsPatchPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsSpecsPatchQueryParams;
    request?: shared.ApiSpec;
    security: ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsPatchResponse extends SpeakeasyBase {
    apiSpec?: shared.ApiSpec;
    contentType: string;
    statusCode: number;
}
