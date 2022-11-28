import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { SellerActionsToRelease } from "./selleractionstorelease";
/**
 * This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
**/
export declare class PaymentHold extends SpeakeasyBase {
    expectedReleaseDate?: string;
    holdAmount?: Amount;
    holdReason?: string;
    holdState?: string;
    releaseDate?: string;
    sellerActionsToRelease?: SellerActionsToRelease[];
}
