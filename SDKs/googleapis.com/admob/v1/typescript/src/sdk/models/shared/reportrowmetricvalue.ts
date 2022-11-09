import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportRowMetricValue
/** 
 * Representation of a metric value.
**/
export class ReportRowMetricValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @Metadata({ data: "json, name=microsValue" })
  microsValue?: string;
}
