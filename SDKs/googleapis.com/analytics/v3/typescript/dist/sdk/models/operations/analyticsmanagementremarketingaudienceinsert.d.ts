import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementRemarketingAudienceInsertPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudienceInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementRemarketingAudienceInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudienceInsertRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementRemarketingAudienceInsertPathParams;
    queryParams: AnalyticsManagementRemarketingAudienceInsertQueryParams;
    request?: shared.RemarketingAudienceInput;
    security: AnalyticsManagementRemarketingAudienceInsertSecurity;
}
export declare class AnalyticsManagementRemarketingAudienceInsertResponse extends SpeakeasyBase {
    contentType: string;
    remarketingAudience?: shared.RemarketingAudience;
    statusCode: number;
}
