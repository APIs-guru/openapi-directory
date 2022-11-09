import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsApisCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisCreatePathParams;
    queryParams: ApigeeregistryProjectsLocationsApisCreateQueryParams;
    request?: shared.Api;
    security: ApigeeregistryProjectsLocationsApisCreateSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisCreateResponse extends SpeakeasyBase {
    api?: shared.Api;
    contentType: string;
    statusCode: number;
}
