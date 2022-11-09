import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Adjustment
/** 
 * An adjustment to the CVSS metric.
**/
export class Adjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Metric" })
  metric?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;
}
