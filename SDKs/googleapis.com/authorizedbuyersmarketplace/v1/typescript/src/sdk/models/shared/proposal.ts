import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { PrivateData } from "./privatedata";
import { Note } from "./note";


export enum ProposalDealTypeEnum {
    DealTypeUnspecified = "DEAL_TYPE_UNSPECIFIED",
    PreferredDeal = "PREFERRED_DEAL",
    PrivateAuction = "PRIVATE_AUCTION",
    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED"
}

export enum ProposalLastUpdaterOrCommentorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}

export enum ProposalOriginatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}

export enum ProposalStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    BuyerReviewRequested = "BUYER_REVIEW_REQUESTED",
    SellerReviewRequested = "SELLER_REVIEW_REQUESTED",
    BuyerAcceptanceRequested = "BUYER_ACCEPTANCE_REQUESTED",
    Finalized = "FINALIZED",
    Terminated = "TERMINATED"
}


// Proposal
/** 
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.
**/
export class Proposal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billedBuyer" })
  billedBuyer?: string;

  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: string;

  @SpeakeasyMetadata({ data: "json, name=buyerContacts", elemType: Contact })
  buyerContacts?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=dealType" })
  dealType?: ProposalDealTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isRenegotiating" })
  isRenegotiating?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdaterOrCommentorRole" })
  lastUpdaterOrCommentorRole?: ProposalLastUpdaterOrCommentorRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes", elemType: Note })
  notes?: Note[];

  @SpeakeasyMetadata({ data: "json, name=originatorRole" })
  originatorRole?: ProposalOriginatorRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=pausingConsented" })
  pausingConsented?: boolean;

  @SpeakeasyMetadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProfile" })
  publisherProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: Contact })
  sellerContacts?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ProposalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
