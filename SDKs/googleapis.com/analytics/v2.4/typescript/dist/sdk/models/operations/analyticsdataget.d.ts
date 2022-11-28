import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsDataGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    dimensions?: string;
    endDate: string;
    fields?: string;
    filters?: string;
    ids: string;
    key?: string;
    maxResults?: number;
    metrics: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    segment?: string;
    sort?: string;
    startDate: string;
    startIndex?: number;
    userIp?: string;
}
export declare class AnalyticsDataGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataGetSecurityOption1;
    option2?: AnalyticsDataGetSecurityOption2;
}
export declare class AnalyticsDataGetRequest extends SpeakeasyBase {
    queryParams: AnalyticsDataGetQueryParams;
    security: AnalyticsDataGetSecurity;
}
export declare class AnalyticsDataGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
