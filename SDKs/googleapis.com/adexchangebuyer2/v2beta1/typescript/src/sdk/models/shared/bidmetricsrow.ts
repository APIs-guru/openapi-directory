import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
import { MetricValue } from "./metricvalue";


// BidMetricsRow
/** 
 * The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;
**/
export class BidMetricsRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=bids" })
  bids?: MetricValue;

  @Metadata({ data: "json, name=bidsInAuction" })
  bidsInAuction?: MetricValue;

  @Metadata({ data: "json, name=billedImpressions" })
  billedImpressions?: MetricValue;

  @Metadata({ data: "json, name=impressionsWon" })
  impressionsWon?: MetricValue;

  @Metadata({ data: "json, name=measurableImpressions" })
  measurableImpressions?: MetricValue;

  @Metadata({ data: "json, name=reachedQueries" })
  reachedQueries?: MetricValue;

  @Metadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;

  @Metadata({ data: "json, name=viewableImpressions" })
  viewableImpressions?: MetricValue;
}
