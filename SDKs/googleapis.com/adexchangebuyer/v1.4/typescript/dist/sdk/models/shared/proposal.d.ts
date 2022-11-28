import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { PrivateData } from "./privatedata";
import { MarketplaceLabel } from "./marketplacelabel";
import { Seller } from "./seller";
/**
 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
 *
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
**/
export declare class Proposal extends SpeakeasyBase {
    billedBuyer?: Buyer;
    buyer?: Buyer;
    buyerContacts?: ContactInformation[];
    buyerPrivateData?: PrivateData;
    dbmAdvertiserIds?: string[];
    hasBuyerSignedOff?: boolean;
    hasSellerSignedOff?: boolean;
    inventorySource?: string;
    isRenegotiating?: boolean;
    isSetupComplete?: boolean;
    kind?: string;
    labels?: MarketplaceLabel[];
    lastUpdaterOrCommentorRole?: string;
    name?: string;
    negotiationId?: string;
    originatorRole?: string;
    privateAuctionId?: string;
    proposalId?: string;
    proposalState?: string;
    revisionNumber?: string;
    revisionTimeMs?: string;
    seller?: Seller;
    sellerContacts?: ContactInformation[];
}
