import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricHeaderEntry } from "./metricheaderentry";
import { PivotHeader } from "./pivotheader";


// MetricHeader
/** 
 * The headers for the metrics.
**/
export class MetricHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricHeaderEntries", elemType: shared.MetricHeaderEntry })
  metricHeaderEntries?: MetricHeaderEntry[];

  @Metadata({ data: "json, name=pivotHeaders", elemType: shared.PivotHeader })
  pivotHeaders?: PivotHeader[];
}
