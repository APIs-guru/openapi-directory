import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Buyer } from "./buyer";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { DeliveryControl } from "./deliverycontrol";
import { MarketplaceLabel } from "./marketplacelabel";
import { PublisherProvidedForecast } from "./publisherprovidedforecast";
import { Seller } from "./seller";
import { SharedTargeting } from "./sharedtargeting";
import { DealTerms } from "./dealterms";


// Product
/** 
 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
 * 
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=billedBuyer" })
  billedBuyer?: Buyer;

  @Metadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @Metadata({ data: "json, name=creationTimeMs" })
  creationTimeMs?: string;

  @Metadata({ data: "json, name=creatorContacts", elemType: shared.ContactInformation })
  creatorContacts?: ContactInformation[];

  @Metadata({ data: "json, name=creatorRole" })
  creatorRole?: string;

  @Metadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @Metadata({ data: "json, name=flightEndTimeMs" })
  flightEndTimeMs?: string;

  @Metadata({ data: "json, name=flightStartTimeMs" })
  flightStartTimeMs?: string;

  @Metadata({ data: "json, name=hasCreatorSignedOff" })
  hasCreatorSignedOff?: boolean;

  @Metadata({ data: "json, name=inventorySource" })
  inventorySource?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.MarketplaceLabel })
  labels?: MarketplaceLabel[];

  @Metadata({ data: "json, name=lastUpdateTimeMs" })
  lastUpdateTimeMs?: string;

  @Metadata({ data: "json, name=legacyOfferId" })
  legacyOfferId?: string;

  @Metadata({ data: "json, name=marketplacePublisherProfileId" })
  marketplacePublisherProfileId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=privateAuctionId" })
  privateAuctionId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @Metadata({ data: "json, name=publisherProvidedForecast" })
  publisherProvidedForecast?: PublisherProvidedForecast;

  @Metadata({ data: "json, name=revisionNumber" })
  revisionNumber?: string;

  @Metadata({ data: "json, name=seller" })
  seller?: Seller;

  @Metadata({ data: "json, name=sharedTargetings", elemType: shared.SharedTargeting })
  sharedTargetings?: SharedTargeting[];

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: string;

  @Metadata({ data: "json, name=terms" })
  terms?: DealTerms;

  @Metadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
