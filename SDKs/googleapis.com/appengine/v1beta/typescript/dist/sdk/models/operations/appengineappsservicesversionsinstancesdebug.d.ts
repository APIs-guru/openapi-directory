import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsInstancesDebugPathParams extends SpeakeasyBase {
    appsId: string;
    instancesId: string;
    servicesId: string;
    versionsId: string;
}
export declare class AppengineAppsServicesVersionsInstancesDebugQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesVersionsInstancesDebugSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesDebugRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsInstancesDebugPathParams;
    queryParams: AppengineAppsServicesVersionsInstancesDebugQueryParams;
    request?: shared.DebugInstanceRequest;
    security: AppengineAppsServicesVersionsInstancesDebugSecurity;
}
export declare class AppengineAppsServicesVersionsInstancesDebugResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
