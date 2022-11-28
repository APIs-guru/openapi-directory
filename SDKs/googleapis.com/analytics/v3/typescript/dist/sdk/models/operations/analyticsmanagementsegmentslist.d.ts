import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsManagementSegmentsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsManagementSegmentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementSegmentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementSegmentsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsManagementSegmentsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementSegmentsListSecurityOption1;
    option2?: AnalyticsManagementSegmentsListSecurityOption2;
    option3?: AnalyticsManagementSegmentsListSecurityOption3;
}
export declare class AnalyticsManagementSegmentsListRequest extends SpeakeasyBase {
    queryParams: AnalyticsManagementSegmentsListQueryParams;
    security: AnalyticsManagementSegmentsListSecurity;
}
export declare class AnalyticsManagementSegmentsListResponse extends SpeakeasyBase {
    contentType: string;
    segments?: shared.Segments;
    statusCode: number;
}
