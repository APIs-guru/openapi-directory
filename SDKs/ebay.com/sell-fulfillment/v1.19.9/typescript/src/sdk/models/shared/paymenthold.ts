import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Amount } from "./amount";
import { SellerActionsToRelease } from "./selleractionstorelease";


// PaymentHold
/** 
 * This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
**/
export class PaymentHold extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectedReleaseDate" })
  expectedReleaseDate?: string;

  @Metadata({ data: "json, name=holdAmount" })
  holdAmount?: Amount;

  @Metadata({ data: "json, name=holdReason" })
  holdReason?: string;

  @Metadata({ data: "json, name=holdState" })
  holdState?: string;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: string;

  @Metadata({ data: "json, name=sellerActionsToRelease", elemType: shared.SellerActionsToRelease })
  sellerActionsToRelease?: SellerActionsToRelease[];
}
