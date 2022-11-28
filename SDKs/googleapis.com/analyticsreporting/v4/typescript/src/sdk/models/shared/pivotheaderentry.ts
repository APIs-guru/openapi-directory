import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricHeaderEntry } from "./metricheaderentry";



// PivotHeaderEntry
/** 
 * The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
**/
export class PivotHeaderEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=dimensionValues" })
  dimensionValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: MetricHeaderEntry;
}
