import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsInstancesListPathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
    versionsId: string;
}
export declare class AppengineAppsServicesVersionsInstancesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsServicesVersionsInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsInstancesListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesVersionsInstancesListSecurityOption1;
    option2?: AppengineAppsServicesVersionsInstancesListSecurityOption2;
    option3?: AppengineAppsServicesVersionsInstancesListSecurityOption3;
}
export declare class AppengineAppsServicesVersionsInstancesListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsInstancesListPathParams;
    queryParams: AppengineAppsServicesVersionsInstancesListQueryParams;
    security: AppengineAppsServicesVersionsInstancesListSecurity;
}
export declare class AppengineAppsServicesVersionsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
}
