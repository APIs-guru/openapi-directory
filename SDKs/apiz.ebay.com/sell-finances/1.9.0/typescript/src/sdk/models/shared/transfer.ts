import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FundingSource } from "./fundingsource";
import { Amount } from "./amount";
import { TransferDetail } from "./transferdetail";


// Transfer
/** 
 * This type is the base response type used by TRANSFER transaction type that is returned in the response.
**/
export class Transfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=fundingSource" })
  fundingSource?: FundingSource;

  @Metadata({ data: "json, name=transactionDate" })
  transactionDate?: string;

  @Metadata({ data: "json, name=transferAmount" })
  transferAmount?: Amount;

  @Metadata({ data: "json, name=transferDetail" })
  transferDetail?: TransferDetail;

  @Metadata({ data: "json, name=transferId" })
  transferId?: string;
}
