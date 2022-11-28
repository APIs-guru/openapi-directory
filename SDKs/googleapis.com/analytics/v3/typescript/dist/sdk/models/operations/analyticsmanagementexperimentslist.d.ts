import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementExperimentsListPathParams extends SpeakeasyBase {
    accountId: string;
    profileId: string;
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementExperimentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementExperimentsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsListSecurityOption1;
    option2?: AnalyticsManagementExperimentsListSecurityOption2;
    option3?: AnalyticsManagementExperimentsListSecurityOption3;
}
export declare class AnalyticsManagementExperimentsListRequest extends SpeakeasyBase {
    pathParams: AnalyticsManagementExperimentsListPathParams;
    queryParams: AnalyticsManagementExperimentsListQueryParams;
    security: AnalyticsManagementExperimentsListSecurity;
}
export declare class AnalyticsManagementExperimentsListResponse extends SpeakeasyBase {
    contentType: string;
    experiments?: shared.Experiments;
    statusCode: number;
}
