import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUnsampledReportsInsertPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUnsampledReportsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementUnsampledReportsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsInsertSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUnsampledReportsInsertSecurityOption1;
    option2?: AnalyticsManagementUnsampledReportsInsertSecurityOption2;
}
export declare class AnalyticsManagementUnsampledReportsInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUnsampledReportsInsertPathParams;
    queryParams: AnalyticsManagementUnsampledReportsInsertQueryParams;
    request?: shared.UnsampledReportInput;
    security: AnalyticsManagementUnsampledReportsInsertSecurity;
}
export declare class AnalyticsManagementUnsampledReportsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unsampledReport?: shared.UnsampledReport;
}
