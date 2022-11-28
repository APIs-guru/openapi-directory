import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesDeletePathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
}
export declare class AppengineAppsServicesDeleteQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesDeleteRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesDeletePathParams;
    queryParams: AppengineAppsServicesDeleteQueryParams;
    security: AppengineAppsServicesDeleteSecurity;
}
export declare class AppengineAppsServicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
