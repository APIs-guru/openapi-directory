import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsPatchPathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
    versionsId: string;
}
export declare class AppengineAppsServicesVersionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
export declare class AppengineAppsServicesVersionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsPatchRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsPatchPathParams;
    queryParams: AppengineAppsServicesVersionsPatchQueryParams;
    request?: shared.Version;
    security: AppengineAppsServicesVersionsPatchSecurity;
}
export declare class AppengineAppsServicesVersionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
