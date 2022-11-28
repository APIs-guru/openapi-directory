import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportRowMetricValue
/** 
 * Representation of a metric value.
**/
export class ReportRowMetricValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @SpeakeasyMetadata({ data: "json, name=microsValue" })
  microsValue?: string;
}
