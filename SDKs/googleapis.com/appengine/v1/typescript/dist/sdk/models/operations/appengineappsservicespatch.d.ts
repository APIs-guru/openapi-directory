import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesPatchPathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
}
export declare class AppengineAppsServicesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    migrateTraffic?: boolean;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsServicesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesPatchRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesPatchPathParams;
    queryParams: AppengineAppsServicesPatchQueryParams;
    request?: shared.Service;
    security: AppengineAppsServicesPatchSecurity;
}
export declare class AppengineAppsServicesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
