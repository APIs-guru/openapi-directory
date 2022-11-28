import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsDataRealtimeGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    dimensions?: string;
    fields?: string;
    filters?: string;
    ids: string;
    key?: string;
    maxResults?: number;
    metrics: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sort?: string;
    userIp?: string;
}
export declare class AnalyticsDataRealtimeGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataRealtimeGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataRealtimeGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataRealtimeGetSecurityOption1;
    option2?: AnalyticsDataRealtimeGetSecurityOption2;
}
export declare class AnalyticsDataRealtimeGetRequest extends SpeakeasyBase {
    queryParams: AnalyticsDataRealtimeGetQueryParams;
    security: AnalyticsDataRealtimeGetSecurity;
}
export declare class AnalyticsDataRealtimeGetResponse extends SpeakeasyBase {
    contentType: string;
    realtimeData?: shared.RealtimeData;
    statusCode: number;
}
