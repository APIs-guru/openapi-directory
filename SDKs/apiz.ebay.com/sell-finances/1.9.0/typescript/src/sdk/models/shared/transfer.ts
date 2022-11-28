import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingSource } from "./fundingsource";
import { Amount } from "./amount";
import { TransferDetail } from "./transferdetail";



// Transfer
/** 
 * This type is the base response type used by TRANSFER transaction type that is returned in the response.
**/
export class Transfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fundingSource" })
  fundingSource?: FundingSource;

  @SpeakeasyMetadata({ data: "json, name=transactionDate" })
  transactionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=transferAmount" })
  transferAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=transferDetail" })
  transferDetail?: TransferDetail;

  @SpeakeasyMetadata({ data: "json, name=transferId" })
  transferId?: string;
}
