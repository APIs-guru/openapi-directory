import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsListPathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
}
export declare enum AppengineAppsServicesVersionsListViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class AppengineAppsServicesVersionsListQueryParams extends SpeakeasyBase {
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
    view?: AppengineAppsServicesVersionsListViewEnum;
}
export declare class AppengineAppsServicesVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesVersionsListSecurityOption1;
    option2?: AppengineAppsServicesVersionsListSecurityOption2;
    option3?: AppengineAppsServicesVersionsListSecurityOption3;
}
export declare class AppengineAppsServicesVersionsListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsListPathParams;
    queryParams: AppengineAppsServicesVersionsListQueryParams;
    security: AppengineAppsServicesVersionsListSecurity;
}
export declare class AppengineAppsServicesVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listVersionsResponse?: shared.ListVersionsResponse;
    statusCode: number;
}
