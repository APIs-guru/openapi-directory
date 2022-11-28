import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Adjustment
/** 
 * An adjustment to the CVSS metric.
**/
export class Adjustment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Metric" })
  metric?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;
}
