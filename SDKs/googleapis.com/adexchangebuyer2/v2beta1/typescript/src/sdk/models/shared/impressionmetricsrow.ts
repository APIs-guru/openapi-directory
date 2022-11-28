import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";



// ImpressionMetricsRow
/** 
 * The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.
**/
export class ImpressionMetricsRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableImpressions" })
  availableImpressions?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=bidRequests" })
  bidRequests?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=inventoryMatches" })
  inventoryMatches?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=responsesWithBids" })
  responsesWithBids?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;

  @SpeakeasyMetadata({ data: "json, name=successfulResponses" })
  successfulResponses?: MetricValue;
}
