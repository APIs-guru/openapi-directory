import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementRemarketingAudienceUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    remarketingAudienceId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudienceUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementRemarketingAudienceUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudienceUpdateRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementRemarketingAudienceUpdatePathParams;
    queryParams: AnalyticsManagementRemarketingAudienceUpdateQueryParams;
    request?: shared.RemarketingAudienceInput;
    security: AnalyticsManagementRemarketingAudienceUpdateSecurity;
}
export declare class AnalyticsManagementRemarketingAudienceUpdateResponse extends SpeakeasyBase {
    contentType: string;
    remarketingAudience?: shared.RemarketingAudience;
    statusCode: number;
}
