import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDetection } from "./customdetection";


// CustomDataIdentifiers
/** 
 * Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
**/
export class CustomDataIdentifiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=detections", elemType: shared.CustomDetection })
  detections?: CustomDetection[];

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
