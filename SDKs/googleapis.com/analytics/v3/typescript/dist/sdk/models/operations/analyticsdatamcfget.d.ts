import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AnalyticsDataMcfGetSamplingLevelEnum {
    Default = "DEFAULT",
    Faster = "FASTER",
    HigherPrecision = "HIGHER_PRECISION"
}
export declare class AnalyticsDataMcfGetQueryParams extends SpeakeasyBase {
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
    samplingLevel?: AnalyticsDataMcfGetSamplingLevelEnum;
    sort?: string;
    startDate: string;
    startIndex?: number;
    userIp?: string;
}
export declare class AnalyticsDataMcfGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataMcfGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataMcfGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataMcfGetSecurityOption1;
    option2?: AnalyticsDataMcfGetSecurityOption2;
}
export declare class AnalyticsDataMcfGetRequest extends SpeakeasyBase {
    queryParams: AnalyticsDataMcfGetQueryParams;
    security: AnalyticsDataMcfGetSecurity;
}
export declare class AnalyticsDataMcfGetResponse extends SpeakeasyBase {
    contentType: string;
    mcfData?: shared.McfData;
    statusCode: number;
}
