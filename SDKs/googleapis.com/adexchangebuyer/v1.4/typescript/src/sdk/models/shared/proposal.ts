import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { PrivateData } from "./privatedata";
import { MarketplaceLabel } from "./marketplacelabel";
import { Seller } from "./seller";



// Proposal
/** 
 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
 * 
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
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

  @SpeakeasyMetadata({ data: "json, name=dbmAdvertiserIds" })
  dbmAdvertiserIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=hasBuyerSignedOff" })
  hasBuyerSignedOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasSellerSignedOff" })
  hasSellerSignedOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inventorySource" })
  inventorySource?: string;

  @SpeakeasyMetadata({ data: "json, name=isRenegotiating" })
  isRenegotiating?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: MarketplaceLabel })
  labels?: MarketplaceLabel[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdaterOrCommentorRole" })
  lastUpdaterOrCommentorRole?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=negotiationId" })
  negotiationId?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorRole" })
  originatorRole?: string;

  @SpeakeasyMetadata({ data: "json, name=privateAuctionId" })
  privateAuctionId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalState" })
  proposalState?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionNumber" })
  revisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionTimeMs" })
  revisionTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: Seller;

  @SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation })
  sellerContacts?: ContactInformation[];
}
