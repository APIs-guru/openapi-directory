import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains the details of the transaction to commit.
**/
export declare class CommitTransactionRequest extends SpeakeasyBase {
    commitDigest: string;
    transactionId: string;
}
