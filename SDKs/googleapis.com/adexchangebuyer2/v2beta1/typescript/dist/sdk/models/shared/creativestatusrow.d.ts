import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
**/
export declare class CreativeStatusRow extends SpeakeasyBase {
    bidCount?: MetricValue;
    creativeStatusId?: number;
    rowDimensions?: RowDimensions;
}
