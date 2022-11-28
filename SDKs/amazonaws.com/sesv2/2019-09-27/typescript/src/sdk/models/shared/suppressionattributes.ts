import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";



// SuppressionAttributes
/** 
 * An object that contains information about the email address suppression preferences for your account in the current AWS Region.
**/
export class SuppressionAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SuppressedReasons" })
  suppressedReasons?: SuppressionListReasonEnum[];
}
