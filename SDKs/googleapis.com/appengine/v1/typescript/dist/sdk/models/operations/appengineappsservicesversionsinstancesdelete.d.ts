import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsInstancesDeletePathParams extends SpeakeasyBase {
    appsId: string;
    instancesId: string;
    servicesId: string;
    versionsId: string;
}
export declare class AppengineAppsServicesVersionsInstancesDeleteQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesVersionsInstancesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesDeleteRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsInstancesDeletePathParams;
    queryParams: AppengineAppsServicesVersionsInstancesDeleteQueryParams;
    security: AppengineAppsServicesVersionsInstancesDeleteSecurity;
}
export declare class AppengineAppsServicesVersionsInstancesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
