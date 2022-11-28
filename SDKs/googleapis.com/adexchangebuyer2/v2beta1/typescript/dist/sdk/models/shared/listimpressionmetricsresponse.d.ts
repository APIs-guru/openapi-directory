import { SpeakeasyBase } from "../../../internal/utils";
import { ImpressionMetricsRow } from "./impressionmetricsrow";
/**
 * Response message for listing the metrics that are measured in number of impressions.
**/
export declare class ListImpressionMetricsResponse extends SpeakeasyBase {
    impressionMetricsRows?: ImpressionMetricsRow[];
    nextPageToken?: string;
}
