import { SpeakeasyBase } from "../../../internal/utils";
import { IoUsage } from "./iousage";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the details of the committed transaction.
**/
export declare class CommitTransactionResult extends SpeakeasyBase {
    commitDigest?: string;
    consumedIOs?: IoUsage;
    timingInformation?: TimingInformation;
    transactionId?: string;
}
