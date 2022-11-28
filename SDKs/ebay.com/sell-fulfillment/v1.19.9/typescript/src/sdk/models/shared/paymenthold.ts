import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { SellerActionsToRelease } from "./selleractionstorelease";



// PaymentHold
/** 
 * This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
**/
export class PaymentHold extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedReleaseDate" })
  expectedReleaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=holdAmount" })
  holdAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=holdReason" })
  holdReason?: string;

  @SpeakeasyMetadata({ data: "json, name=holdState" })
  holdState?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerActionsToRelease", elemType: SellerActionsToRelease })
  sellerActionsToRelease?: SellerActionsToRelease[];
}
