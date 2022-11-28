import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AnalyticsDataGaGetOutputEnum {
    DataTable = "dataTable",
    Json = "json"
}
export declare enum AnalyticsDataGaGetSamplingLevelEnum {
    Default = "DEFAULT",
    Faster = "FASTER",
    HigherPrecision = "HIGHER_PRECISION"
}
export declare class AnalyticsDataGaGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    dimensions?: string;
    endDate: string;
    fields?: string;
    filters?: string;
    ids: string;
    includeEmptyRows?: boolean;
    key?: string;
    maxResults?: number;
    metrics: string;
    oauthToken?: string;
    output?: AnalyticsDataGaGetOutputEnum;
    prettyPrint?: boolean;
    quotaUser?: string;
    samplingLevel?: AnalyticsDataGaGetSamplingLevelEnum;
    segment?: string;
    sort?: string;
    startDate: string;
    startIndex?: number;
    userIp?: string;
}
export declare class AnalyticsDataGaGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataGaGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsDataGaGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataGaGetSecurityOption1;
    option2?: AnalyticsDataGaGetSecurityOption2;
}
export declare class AnalyticsDataGaGetRequest extends SpeakeasyBase {
    queryParams: AnalyticsDataGaGetQueryParams;
    security: AnalyticsDataGaGetSecurity;
}
export declare class AnalyticsDataGaGetResponse extends SpeakeasyBase {
    contentType: string;
    gaData?: shared.GaData;
    statusCode: number;
}
