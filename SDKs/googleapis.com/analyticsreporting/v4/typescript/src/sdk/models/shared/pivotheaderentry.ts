import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricHeaderEntry } from "./metricheaderentry";


// PivotHeaderEntry
/** 
 * The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
**/
export class PivotHeaderEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];

  @Metadata({ data: "json, name=dimensionValues" })
  dimensionValues?: string[];

  @Metadata({ data: "json, name=metric" })
  metric?: MetricHeaderEntry;
}
