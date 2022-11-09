import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsInstancesGetPathParams extends SpeakeasyBase {
    appsId: string;
    instancesId: string;
    servicesId: string;
    versionsId: string;
}
export declare class AppengineAppsServicesVersionsInstancesGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesVersionsInstancesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesVersionsInstancesGetSecurityOption1;
    option2?: AppengineAppsServicesVersionsInstancesGetSecurityOption2;
    option3?: AppengineAppsServicesVersionsInstancesGetSecurityOption3;
}
export declare class AppengineAppsServicesVersionsInstancesGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsInstancesGetPathParams;
    queryParams: AppengineAppsServicesVersionsInstancesGetQueryParams;
    security: AppengineAppsServicesVersionsInstancesGetSecurity;
}
export declare class AppengineAppsServicesVersionsInstancesGetResponse extends SpeakeasyBase {
    contentType: string;
    instance?: shared.Instance;
    statusCode: number;
}
