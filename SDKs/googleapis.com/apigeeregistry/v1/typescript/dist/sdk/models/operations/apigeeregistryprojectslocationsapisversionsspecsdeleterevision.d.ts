import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionQueryParams;
    security: ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionResponse extends SpeakeasyBase {
    apiSpec?: shared.ApiSpec;
    contentType: string;
    statusCode: number;
}
