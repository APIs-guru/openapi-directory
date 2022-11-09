import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsDeletePathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
    versionsId: string;
}
export declare class AppengineAppsServicesVersionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesVersionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsDeleteRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsDeletePathParams;
    queryParams: AppengineAppsServicesVersionsDeleteQueryParams;
    security: AppengineAppsServicesVersionsDeleteSecurity;
}
export declare class AppengineAppsServicesVersionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
