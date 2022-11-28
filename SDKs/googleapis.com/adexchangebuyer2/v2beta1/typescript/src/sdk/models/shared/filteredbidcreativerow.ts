import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";



// FilteredBidCreativeRow
/** 
 * The number of filtered bids with the specified dimension values that have the specified creative.
**/
export class FilteredBidCreativeRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidCount" })
  bidCount?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;
}
