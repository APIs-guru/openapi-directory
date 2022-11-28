import { SpeakeasyBase } from "../../../internal/utils";
import { CustomMetric } from "./custommetric";
/**
 * A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
**/
export declare class CustomMetrics extends SpeakeasyBase {
    items?: CustomMetric[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
