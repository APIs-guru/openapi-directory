import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDetection } from "./customdetection";



// CustomDataIdentifiers
/** 
 * Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
**/
export class CustomDataIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detections", elemType: CustomDetection })
  detections?: CustomDetection[];

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
