import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImpressionMetricsRow } from "./impressionmetricsrow";


// ListImpressionMetricsResponse
/** 
 * Response message for listing the metrics that are measured in number of impressions.
**/
export class ListImpressionMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=impressionMetricsRows", elemType: shared.ImpressionMetricsRow })
  impressionMetricsRows?: ImpressionMetricsRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
