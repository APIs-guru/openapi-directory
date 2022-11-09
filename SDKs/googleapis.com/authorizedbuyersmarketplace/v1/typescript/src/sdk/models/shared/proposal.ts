import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contact } from "./contact";
import { PrivateData } from "./privatedata";
import { Note } from "./note";
import { Contact } from "./contact";

export enum ProposalDealTypeEnum {
    DealTypeUnspecified = "DEAL_TYPE_UNSPECIFIED"
,    PreferredDeal = "PREFERRED_DEAL"
,    PrivateAuction = "PRIVATE_AUCTION"
,    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED"
}

export enum ProposalLastUpdaterOrCommentorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED"
,    Buyer = "BUYER"
,    Seller = "SELLER"
}

export enum ProposalOriginatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED"
,    Buyer = "BUYER"
,    Seller = "SELLER"
}

export enum ProposalStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    BuyerReviewRequested = "BUYER_REVIEW_REQUESTED"
,    SellerReviewRequested = "SELLER_REVIEW_REQUESTED"
,    BuyerAcceptanceRequested = "BUYER_ACCEPTANCE_REQUESTED"
,    Finalized = "FINALIZED"
,    Terminated = "TERMINATED"
}


// Proposal
/** 
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.
**/
export class Proposal extends SpeakeasyBase {
  @Metadata({ data: "json, name=billedBuyer" })
  billedBuyer?: string;

  @Metadata({ data: "json, name=buyer" })
  buyer?: string;

  @Metadata({ data: "json, name=buyerContacts", elemType: shared.Contact })
  buyerContacts?: Contact[];

  @Metadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=dealType" })
  dealType?: ProposalDealTypeEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isRenegotiating" })
  isRenegotiating?: boolean;

  @Metadata({ data: "json, name=lastUpdaterOrCommentorRole" })
  lastUpdaterOrCommentorRole?: ProposalLastUpdaterOrCommentorRoleEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes", elemType: shared.Note })
  notes?: Note[];

  @Metadata({ data: "json, name=originatorRole" })
  originatorRole?: ProposalOriginatorRoleEnum;

  @Metadata({ data: "json, name=pausingConsented" })
  pausingConsented?: boolean;

  @Metadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;

  @Metadata({ data: "json, name=publisherProfile" })
  publisherProfile?: string;

  @Metadata({ data: "json, name=sellerContacts", elemType: shared.Contact })
  sellerContacts?: Contact[];

  @Metadata({ data: "json, name=state" })
  state?: ProposalStateEnum;

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
