import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesListPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsServicesListQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesListSecurityOption1;
    option2?: AppengineAppsServicesListSecurityOption2;
    option3?: AppengineAppsServicesListSecurityOption3;
}
export declare class AppengineAppsServicesListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesListPathParams;
    queryParams: AppengineAppsServicesListQueryParams;
    security: AppengineAppsServicesListSecurity;
}
export declare class AppengineAppsServicesListResponse extends SpeakeasyBase {
    contentType: string;
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
}
