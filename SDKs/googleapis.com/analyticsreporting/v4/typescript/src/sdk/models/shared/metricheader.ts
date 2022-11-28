import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricHeaderEntry } from "./metricheaderentry";
import { PivotHeader } from "./pivotheader";



// MetricHeader
/** 
 * The headers for the metrics.
**/
export class MetricHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricHeaderEntries", elemType: MetricHeaderEntry })
  metricHeaderEntries?: MetricHeaderEntry[];

  @SpeakeasyMetadata({ data: "json, name=pivotHeaders", elemType: PivotHeader })
  pivotHeaders?: PivotHeader[];
}
