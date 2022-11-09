import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineAppsOperationsListPathParams extends SpeakeasyBase {
    appsId: string;
}
export declare class AppengineAppsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsOperationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsOperationsListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsOperationsListSecurityOption1;
    option2?: AppengineAppsOperationsListSecurityOption2;
    option3?: AppengineAppsOperationsListSecurityOption3;
}
export declare class AppengineAppsOperationsListRequest extends SpeakeasyBase {
    pathParams: AppengineAppsOperationsListPathParams;
    queryParams: AppengineAppsOperationsListQueryParams;
    security: AppengineAppsOperationsListSecurity;
}
export declare class AppengineAppsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
