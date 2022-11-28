import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementRemarketingAudienceGetPathParams extends SpeakeasyBase {
    accountId: string;
    remarketingAudienceId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudienceGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AnalyticsManagementRemarketingAudienceGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudienceGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudienceGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementRemarketingAudienceGetSecurityOption1;
    option2?: AnalyticsManagementRemarketingAudienceGetSecurityOption2;
}
export declare class AnalyticsManagementRemarketingAudienceGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementRemarketingAudienceGetPathParams;
    queryParams: AnalyticsManagementRemarketingAudienceGetQueryParams;
    security: AnalyticsManagementRemarketingAudienceGetSecurity;
}
export declare class AnalyticsManagementRemarketingAudienceGetResponse extends SpeakeasyBase {
    contentType: string;
    remarketingAudience?: shared.RemarketingAudience;
    statusCode: number;
}
