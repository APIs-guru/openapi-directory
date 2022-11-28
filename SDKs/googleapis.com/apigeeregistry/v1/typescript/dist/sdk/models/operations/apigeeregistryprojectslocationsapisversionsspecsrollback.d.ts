import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackQueryParams;
    request?: shared.RollbackApiSpecRequest;
    security: ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackResponse extends SpeakeasyBase {
    apiSpec?: shared.ApiSpec;
    contentType: string;
    statusCode: number;
}
