import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";


// SuppressionAttributes
/** 
 * An object that contains information about the email address suppression preferences for your account in the current AWS Region.
**/
export class SuppressionAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuppressedReasons" })
  suppressedReasons?: SuppressionListReasonEnum[];
}
