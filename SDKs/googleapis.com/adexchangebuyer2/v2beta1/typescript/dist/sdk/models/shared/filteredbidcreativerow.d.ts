import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The number of filtered bids with the specified dimension values that have the specified creative.
**/
export declare class FilteredBidCreativeRow extends SpeakeasyBase {
    bidCount?: MetricValue;
    creativeId?: string;
    rowDimensions?: RowDimensions;
}
