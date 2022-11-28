import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams extends SpeakeasyBase {
    insight: string;
}
export declare enum BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    CustomDateRange = "CUSTOM_DATE_RANGE"
}
export declare class BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    aggregation?: BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum;
    alt?: shared.AltEnum;
    callback?: string;
    customGroupingFieldFilter?: string;
    customGroupingGroupFields?: string[];
    endTime?: string;
    fieldFilter?: string;
    fields?: string;
    group?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams;
    queryParams: BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams;
    security: BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity;
}
export declare class BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse?: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse;
    statusCode: number;
}
