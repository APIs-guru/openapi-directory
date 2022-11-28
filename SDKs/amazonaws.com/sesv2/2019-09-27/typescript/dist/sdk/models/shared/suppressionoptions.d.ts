import { SpeakeasyBase } from "../../../internal/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";
/**
 * An object that contains information about the suppression list preferences for your account.
**/
export declare class SuppressionOptions extends SpeakeasyBase {
    suppressedReasons?: SuppressionListReasonEnum[];
}
