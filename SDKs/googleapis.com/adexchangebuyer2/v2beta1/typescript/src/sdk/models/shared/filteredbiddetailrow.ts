import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";


// FilteredBidDetailRow
/** 
 * The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
**/
export class FilteredBidDetailRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidCount" })
  bidCount?: MetricValue;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=detailId" })
  detailId?: number;

  @Metadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;
}
