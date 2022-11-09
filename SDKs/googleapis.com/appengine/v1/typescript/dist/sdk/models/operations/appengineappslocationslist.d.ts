import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsLocationsListPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineAppsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsLocationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsLocationsListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsLocationsListSecurityOption1;
    option2?: AppengineAppsLocationsListSecurityOption2;
    option3?: AppengineAppsLocationsListSecurityOption3;
}
export declare class AppengineAppsLocationsListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsLocationsListPathParams;
    queryParams: AppengineAppsLocationsListQueryParams;
    security: AppengineAppsLocationsListSecurity;
}
export declare class AppengineAppsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
