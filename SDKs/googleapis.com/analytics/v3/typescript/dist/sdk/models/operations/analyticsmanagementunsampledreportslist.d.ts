import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUnsampledReportsListPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUnsampledReportsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementUnsampledReportsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUnsampledReportsListSecurityOption1;
    option2?: AnalyticsManagementUnsampledReportsListSecurityOption2;
    option3?: AnalyticsManagementUnsampledReportsListSecurityOption3;
}
export declare class AnalyticsManagementUnsampledReportsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUnsampledReportsListPathParams;
    queryParams: AnalyticsManagementUnsampledReportsListQueryParams;
    security: AnalyticsManagementUnsampledReportsListSecurity;
}
export declare class AnalyticsManagementUnsampledReportsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unsampledReports?: shared.UnsampledReports;
}
