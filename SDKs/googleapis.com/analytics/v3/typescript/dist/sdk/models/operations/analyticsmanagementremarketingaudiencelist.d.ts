import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementRemarketingAudienceListPathParams extends SpeakeasyBase {
    accountId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudienceListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    type?: string;
    userIp?: string;
}
export declare class AnalyticsManagementRemarketingAudienceListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudienceListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementRemarketingAudienceListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementRemarketingAudienceListSecurityOption1;
    option2?: AnalyticsManagementRemarketingAudienceListSecurityOption2;
}
export declare class AnalyticsManagementRemarketingAudienceListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementRemarketingAudienceListPathParams;
    queryParams: AnalyticsManagementRemarketingAudienceListQueryParams;
    security: AnalyticsManagementRemarketingAudienceListSecurity;
}
export declare class AnalyticsManagementRemarketingAudienceListResponse extends SpeakeasyBase {
    contentType: string;
    remarketingAudiences?: shared.RemarketingAudiences;
    statusCode: number;
}
