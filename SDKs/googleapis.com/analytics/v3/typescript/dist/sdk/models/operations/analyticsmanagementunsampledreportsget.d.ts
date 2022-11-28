import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUnsampledReportsGetPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    unsampledReportId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUnsampledReportsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementUnsampledReportsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUnsampledReportsGetSecurityOption1;
    option2?: AnalyticsManagementUnsampledReportsGetSecurityOption2;
    option3?: AnalyticsManagementUnsampledReportsGetSecurityOption3;
}
export declare class AnalyticsManagementUnsampledReportsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUnsampledReportsGetPathParams;
    queryParams: AnalyticsManagementUnsampledReportsGetQueryParams;
    security: AnalyticsManagementUnsampledReportsGetSecurity;
}
export declare class AnalyticsManagementUnsampledReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unsampledReport?: shared.UnsampledReport;
}
