import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImpressionMetricsRow } from "./impressionmetricsrow";



// ListImpressionMetricsResponse
/** 
 * Response message for listing the metrics that are measured in number of impressions.
**/
export class ListImpressionMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=impressionMetricsRows", elemType: ImpressionMetricsRow })
  impressionMetricsRows?: ImpressionMetricsRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
