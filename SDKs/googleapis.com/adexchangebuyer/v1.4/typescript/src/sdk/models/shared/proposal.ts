import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Buyer } from "./buyer";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { PrivateData } from "./privatedata";
import { MarketplaceLabel } from "./marketplacelabel";
import { Seller } from "./seller";
import { ContactInformation } from "./contactinformation";


// Proposal
/** 
 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
 * 
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
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

  @Metadata({ data: "json, name=dbmAdvertiserIds" })
  dbmAdvertiserIds?: string[];

  @Metadata({ data: "json, name=hasBuyerSignedOff" })
  hasBuyerSignedOff?: boolean;

  @Metadata({ data: "json, name=hasSellerSignedOff" })
  hasSellerSignedOff?: boolean;

  @Metadata({ data: "json, name=inventorySource" })
  inventorySource?: string;

  @Metadata({ data: "json, name=isRenegotiating" })
  isRenegotiating?: boolean;

  @Metadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.MarketplaceLabel })
  labels?: MarketplaceLabel[];

  @Metadata({ data: "json, name=lastUpdaterOrCommentorRole" })
  lastUpdaterOrCommentorRole?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=negotiationId" })
  negotiationId?: string;

  @Metadata({ data: "json, name=originatorRole" })
  originatorRole?: string;

  @Metadata({ data: "json, name=privateAuctionId" })
  privateAuctionId?: string;

  @Metadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @Metadata({ data: "json, name=proposalState" })
  proposalState?: string;

  @Metadata({ data: "json, name=revisionNumber" })
  revisionNumber?: string;

  @Metadata({ data: "json, name=revisionTimeMs" })
  revisionTimeMs?: string;

  @Metadata({ data: "json, name=seller" })
  seller?: Seller;

  @Metadata({ data: "json, name=sellerContacts", elemType: shared.ContactInformation })
  sellerContacts?: ContactInformation[];
}
