import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricOrderBy
/** 
 * Sorts by metric values.
**/
export class MetricOrderBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;
}
