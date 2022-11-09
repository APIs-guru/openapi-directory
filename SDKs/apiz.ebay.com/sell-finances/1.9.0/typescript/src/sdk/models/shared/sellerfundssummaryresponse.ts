import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";


// SellerFundsSummaryResponse
/** 
 * This type is used by the response payload of the getSellerFundsSummary method. All of the funds returned in getSellerFundsSummary are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
**/
export class SellerFundsSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableFunds" })
  availableFunds?: Amount;

  @Metadata({ data: "json, name=fundsOnHold" })
  fundsOnHold?: Amount;

  @Metadata({ data: "json, name=processingFunds" })
  processingFunds?: Amount;

  @Metadata({ data: "json, name=totalFunds" })
  totalFunds?: Amount;
}
