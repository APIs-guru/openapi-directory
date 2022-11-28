import { SpeakeasyBase } from "../../../internal/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";
/**
 * A summary that describes the suppressed email address.
**/
export declare class SuppressedDestinationSummary extends SpeakeasyBase {
    emailAddress: string;
    lastUpdateTime: Date;
    reason: SuppressionListReasonEnum;
}
