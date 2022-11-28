import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionQueryParams;
    request?: shared.TagApiSpecRevisionRequest;
    security: ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse extends SpeakeasyBase {
    apiSpec?: shared.ApiSpec;
    contentType: string;
    statusCode: number;
}
