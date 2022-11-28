import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementUnsampledReportsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    unsampledReportId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementUnsampledReportsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementUnsampledReportsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementUnsampledReportsDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementUnsampledReportsDeletePathParams;
    queryParams: AnalyticsManagementUnsampledReportsDeleteQueryParams;
    security: AnalyticsManagementUnsampledReportsDeleteSecurity;
}
export declare class AnalyticsManagementUnsampledReportsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
