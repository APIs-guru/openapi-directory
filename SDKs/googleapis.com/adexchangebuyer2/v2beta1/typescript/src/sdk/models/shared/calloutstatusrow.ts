import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";


// CalloutStatusRow
/** 
 * The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.
**/
export class CalloutStatusRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=calloutStatusId" })
  calloutStatusId?: number;

  @Metadata({ data: "json, name=impressionCount" })
  impressionCount?: MetricValue;

  @Metadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;
}
