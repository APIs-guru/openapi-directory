import { SpeakeasyBase } from "../../../internal/utils";
import { SuppressedDestinationAttributes } from "./suppresseddestinationattributes";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";
/**
 * An object that contains information about an email address that is on the suppression list for your account.
**/
export declare class SuppressedDestination extends SpeakeasyBase {
    attributes?: SuppressedDestinationAttributes;
    emailAddress: string;
    lastUpdateTime: Date;
    reason: SuppressionListReasonEnum;
}
