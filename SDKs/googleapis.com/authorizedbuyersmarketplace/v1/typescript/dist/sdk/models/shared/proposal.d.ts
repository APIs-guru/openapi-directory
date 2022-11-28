import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { PrivateData } from "./privatedata";
import { Note } from "./note";
export declare enum ProposalDealTypeEnum {
    DealTypeUnspecified = "DEAL_TYPE_UNSPECIFIED",
    PreferredDeal = "PREFERRED_DEAL",
    PrivateAuction = "PRIVATE_AUCTION",
    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED"
}
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
export declare enum ProposalStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    BuyerReviewRequested = "BUYER_REVIEW_REQUESTED",
    SellerReviewRequested = "SELLER_REVIEW_REQUESTED",
    BuyerAcceptanceRequested = "BUYER_ACCEPTANCE_REQUESTED",
    Finalized = "FINALIZED",
    Terminated = "TERMINATED"
}
/**
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.
**/
export declare class Proposal extends SpeakeasyBase {
    billedBuyer?: string;
    buyer?: string;
    buyerContacts?: Contact[];
    buyerPrivateData?: PrivateData;
    client?: string;
    dealType?: ProposalDealTypeEnum;
    displayName?: string;
    isRenegotiating?: boolean;
    lastUpdaterOrCommentorRole?: ProposalLastUpdaterOrCommentorRoleEnum;
    name?: string;
    notes?: Note[];
    originatorRole?: ProposalOriginatorRoleEnum;
    pausingConsented?: boolean;
    proposalRevision?: string;
    publisherProfile?: string;
    sellerContacts?: Contact[];
    state?: ProposalStateEnum;
    termsAndConditions?: string;
    updateTime?: string;
}
