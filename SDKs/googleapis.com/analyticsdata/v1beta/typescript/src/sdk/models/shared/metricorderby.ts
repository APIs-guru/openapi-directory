import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricOrderBy
/** 
 * Sorts by metric values.
**/
export class MetricOrderBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName?: string;
}
