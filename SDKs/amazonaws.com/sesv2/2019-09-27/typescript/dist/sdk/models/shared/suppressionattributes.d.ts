import { SpeakeasyBase } from "../../../internal/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";
/**
 * An object that contains information about the email address suppression preferences for your account in the current AWS Region.
**/
export declare class SuppressionAttributes extends SpeakeasyBase {
    suppressedReasons?: SuppressionListReasonEnum[];
}
