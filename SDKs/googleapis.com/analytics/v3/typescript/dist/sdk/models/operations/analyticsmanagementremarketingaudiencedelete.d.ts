import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementRemarketingAudienceDeletePathParams extends SpeakeasyBase {
    accountId: string;
    remarketingAudienceId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudienceDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementRemarketingAudienceDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudienceDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementRemarketingAudienceDeletePathParams;
    queryParams: AnalyticsManagementRemarketingAudienceDeleteQueryParams;
    security: AnalyticsManagementRemarketingAudienceDeleteSecurity;
}
export declare class AnalyticsManagementRemarketingAudienceDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
