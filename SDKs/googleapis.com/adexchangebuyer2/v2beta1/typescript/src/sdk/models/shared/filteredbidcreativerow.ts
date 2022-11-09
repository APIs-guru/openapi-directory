import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";


// FilteredBidCreativeRow
/** 
 * The number of filtered bids with the specified dimension values that have the specified creative.
**/
export class FilteredBidCreativeRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidCount" })
  bidCount?: MetricValue;

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;
}
