import { SpeakeasyBase } from "../../../internal/utils";
import { FundingSource } from "./fundingsource";
import { Amount } from "./amount";
import { TransferDetail } from "./transferdetail";
/**
 * This type is the base response type used by TRANSFER transaction type that is returned in the response.
**/
export declare class Transfer extends SpeakeasyBase {
    fundingSource?: FundingSource;
    transactionDate?: string;
    transferAmount?: Amount;
    transferDetail?: TransferDetail;
    transferId?: string;
}
