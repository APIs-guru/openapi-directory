import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";



// SuppressionOptions
/** 
 * An object that contains information about the suppression list preferences for your account.
**/
export class SuppressionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SuppressedReasons" })
  suppressedReasons?: SuppressionListReasonEnum[];
}
