import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { PrivateData } from "./privatedata";
import { DealInput } from "./deal";
import { SellerInput } from "./seller";
import { Deal } from "./deal";
import { Note } from "./note";
import { Seller } from "./seller";


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

export enum ProposalProposalStateEnum {
    ProposalStateUnspecified = "PROPOSAL_STATE_UNSPECIFIED",
    Proposed = "PROPOSED",
    BuyerAccepted = "BUYER_ACCEPTED",
    SellerAccepted = "SELLER_ACCEPTED",
    Canceled = "CANCELED",
    Finalized = "FINALIZED"
}


// ProposalInput
/** 
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
**/
export class ProposalInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billedBuyer" })
  billedBuyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=buyerContacts", elemType: ContactInformation })
  buyerContacts?: ContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @SpeakeasyMetadata({ data: "json, name=deals", elemType: DealInput })
  deals?: DealInput[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: SellerInput;
}


// Proposal
/** 
 * Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
**/
export class Proposal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billedBuyer" })
  billedBuyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=buyerContacts", elemType: ContactInformation })
  buyerContacts?: ContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @SpeakeasyMetadata({ data: "json, name=deals", elemType: Deal })
  deals?: Deal[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isRenegotiating" })
  isRenegotiating?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdaterOrCommentorRole" })
  lastUpdaterOrCommentorRole?: ProposalLastUpdaterOrCommentorRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=notes", elemType: Note })
  notes?: Note[];

  @SpeakeasyMetadata({ data: "json, name=originatorRole" })
  originatorRole?: ProposalOriginatorRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=privateAuctionId" })
  privateAuctionId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalState" })
  proposalState?: ProposalProposalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: Seller;

  @SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation })
  sellerContacts?: ContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
