import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementRemarketingAudiencePatchPathParams extends SpeakeasyBase {
    accountId: string;
    remarketingAudienceId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudiencePatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementRemarketingAudiencePatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudiencePatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementRemarketingAudiencePatchPathParams;
    queryParams: AnalyticsManagementRemarketingAudiencePatchQueryParams;
    request?: shared.RemarketingAudienceInput;
    security: AnalyticsManagementRemarketingAudiencePatchSecurity;
}
export declare class AnalyticsManagementRemarketingAudiencePatchResponse extends SpeakeasyBase {
    contentType: string;
    remarketingAudience?: shared.RemarketingAudience;
    statusCode: number;
}
