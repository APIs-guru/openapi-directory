import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
import { MetricValue } from "./metricvalue";


// ImpressionMetricsRow
/** 
 * The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.
**/
export class ImpressionMetricsRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableImpressions" })
  availableImpressions?: MetricValue;

  @Metadata({ data: "json, name=bidRequests" })
  bidRequests?: MetricValue;

  @Metadata({ data: "json, name=inventoryMatches" })
  inventoryMatches?: MetricValue;

  @Metadata({ data: "json, name=responsesWithBids" })
  responsesWithBids?: MetricValue;

  @Metadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;

  @Metadata({ data: "json, name=successfulResponses" })
  successfulResponses?: MetricValue;
}
