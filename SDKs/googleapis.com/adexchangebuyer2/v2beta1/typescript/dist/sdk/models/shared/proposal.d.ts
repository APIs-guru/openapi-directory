import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { PrivateData } from "./privatedata";
import { DealInput } from "./deal";
import { SellerInput } from "./seller";
import { Deal } from "./deal";
import { Note } from "./note";
import { Seller } from "./seller";
export declare enum ProposalLastUpdaterOrCommentorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
export declare enum ProposalOriginatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
export declare enum ProposalProposalStateEnum {
    ProposalStateUnspecified = "PROPOSAL_STATE_UNSPECIFIED",
    Proposed = "PROPOSED",
    BuyerAccepted = "BUYER_ACCEPTED",
    SellerAccepted = "SELLER_ACCEPTED",
    Canceled = "CANCELED",
    Finalized = "FINALIZED"
}
/**
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
**/
export declare class ProposalInput extends SpeakeasyBase {
    billedBuyer?: Buyer;
    buyer?: Buyer;
    buyerContacts?: ContactInformation[];
    buyerPrivateData?: PrivateData;
    deals?: DealInput[];
    displayName?: string;
    seller?: SellerInput;
}
/**
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
**/
export declare class Proposal extends SpeakeasyBase {
    billedBuyer?: Buyer;
    buyer?: Buyer;
    buyerContacts?: ContactInformation[];
    buyerPrivateData?: PrivateData;
    deals?: Deal[];
    displayName?: string;
    isRenegotiating?: boolean;
    isSetupComplete?: boolean;
    lastUpdaterOrCommentorRole?: ProposalLastUpdaterOrCommentorRoleEnum;
    notes?: Note[];
    originatorRole?: ProposalOriginatorRoleEnum;
    privateAuctionId?: string;
    proposalId?: string;
    proposalRevision?: string;
    proposalState?: ProposalProposalStateEnum;
    seller?: Seller;
    sellerContacts?: ContactInformation[];
    termsAndConditions?: string;
    updateTime?: string;
}
