import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUploadsListPathParams extends SpeakeasyBase {
    accountId: string;
    customDataSourceId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUploadsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    userIp?: string;
}
export declare class AnalyticsManagementUploadsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUploadsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUploadsListSecurityOption1;
    option2?: AnalyticsManagementUploadsListSecurityOption2;
    option3?: AnalyticsManagementUploadsListSecurityOption3;
}
export declare class AnalyticsManagementUploadsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUploadsListPathParams;
    queryParams: AnalyticsManagementUploadsListQueryParams;
    security: AnalyticsManagementUploadsListSecurity;
}
export declare class AnalyticsManagementUploadsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploads?: shared.Uploads;
}
