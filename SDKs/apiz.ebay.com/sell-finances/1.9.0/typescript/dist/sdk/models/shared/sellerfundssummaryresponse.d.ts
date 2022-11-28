import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is used by the response payload of the getSellerFundsSummary method. All of the funds returned in getSellerFundsSummary are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
**/
export declare class SellerFundsSummaryResponse extends SpeakeasyBase {
    availableFunds?: Amount;
    fundsOnHold?: Amount;
    processingFunds?: Amount;
    totalFunds?: Amount;
}
