import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Buyer } from "./buyer";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { PrivateData } from "./privatedata";
import { Deal } from "./deal";
import { Note } from "./note";
import { Seller } from "./seller";
import { ContactInformation } from "./contactinformation";

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

export enum ProposalProposalStateEnum {
    ProposalStateUnspecified = "PROPOSAL_STATE_UNSPECIFIED"
,    Proposed = "PROPOSED"
,    BuyerAccepted = "BUYER_ACCEPTED"
,    SellerAccepted = "SELLER_ACCEPTED"
,    Canceled = "CANCELED"
,    Finalized = "FINALIZED"
}


// Proposal
/** 
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
**/
export class Proposal extends SpeakeasyBase {
  @Metadata({ data: "json, name=billedBuyer" })
  billedBuyer?: Buyer;

  @Metadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @Metadata({ data: "json, name=buyerContacts", elemType: shared.ContactInformation })
  buyerContacts?: ContactInformation[];

  @Metadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @Metadata({ data: "json, name=deals", elemType: shared.Deal })
  deals?: Deal[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isRenegotiating" })
  isRenegotiating?: boolean;

  @Metadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @Metadata({ data: "json, name=lastUpdaterOrCommentorRole" })
  lastUpdaterOrCommentorRole?: ProposalLastUpdaterOrCommentorRoleEnum;

  @Metadata({ data: "json, name=notes", elemType: shared.Note })
  notes?: Note[];

  @Metadata({ data: "json, name=originatorRole" })
  originatorRole?: ProposalOriginatorRoleEnum;

  @Metadata({ data: "json, name=privateAuctionId" })
  privateAuctionId?: string;

  @Metadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @Metadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;

  @Metadata({ data: "json, name=proposalState" })
  proposalState?: ProposalProposalStateEnum;

  @Metadata({ data: "json, name=seller" })
  seller?: Seller;

  @Metadata({ data: "json, name=sellerContacts", elemType: shared.ContactInformation })
  sellerContacts?: ContactInformation[];

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
