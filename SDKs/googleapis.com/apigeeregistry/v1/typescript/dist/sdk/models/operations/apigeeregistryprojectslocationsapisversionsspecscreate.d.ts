import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiSpecId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsSpecsCreatePathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsSpecsCreateQueryParams;
    request?: shared.ApiSpec;
    security: ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse extends SpeakeasyBase {
    apiSpec?: shared.ApiSpec;
    contentType: string;
    statusCode: number;
}
