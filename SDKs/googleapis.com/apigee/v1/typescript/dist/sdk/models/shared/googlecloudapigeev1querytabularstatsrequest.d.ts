import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1MetricAggregation } from "./googlecloudapigeev1metricaggregation";
import { GoogleTypeInterval } from "./googletypeinterval";
/**
 * Request payload representing the query to be run for fetching security statistics as rows.
**/
export declare class GoogleCloudApigeeV1QueryTabularStatsRequest extends SpeakeasyBase {
    dimensions?: string[];
    filter?: string;
    metrics?: GoogleCloudApigeeV1MetricAggregation[];
    pageSize?: number;
    pageToken?: string;
    timeRange?: GoogleTypeInterval;
}
