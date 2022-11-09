import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the details of the started transaction.
**/
export declare class StartTransactionResult extends SpeakeasyBase {
    timingInformation?: TimingInformation;
    transactionId?: string;
}
