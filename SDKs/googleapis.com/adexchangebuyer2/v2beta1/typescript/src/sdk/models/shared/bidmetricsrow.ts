import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";



// BidMetricsRow
/** 
 * The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;
**/
export class BidMetricsRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bids" })
  bids?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=bidsInAuction" })
  bidsInAuction?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=billedImpressions" })
  billedImpressions?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=impressionsWon" })
  impressionsWon?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=measurableImpressions" })
  measurableImpressions?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=reachedQueries" })
  reachedQueries?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;

  @SpeakeasyMetadata({ data: "json, name=viewableImpressions" })
  viewableImpressions?: MetricValue;
}
