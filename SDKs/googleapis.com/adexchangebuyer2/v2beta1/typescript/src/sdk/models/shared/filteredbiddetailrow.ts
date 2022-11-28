import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";



// FilteredBidDetailRow
/** 
 * The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
**/
export class FilteredBidDetailRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidCount" })
  bidCount?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=detailId" })
  detailId?: number;

  @SpeakeasyMetadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;
}
