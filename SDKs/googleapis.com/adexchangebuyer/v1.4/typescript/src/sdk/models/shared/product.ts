import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=billedBuyer" })
  billedBuyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=creationTimeMs" })
  creationTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorContacts", elemType: ContactInformation })
  creatorContacts?: ContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=creatorRole" })
  creatorRole?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @SpeakeasyMetadata({ data: "json, name=flightEndTimeMs" })
  flightEndTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=flightStartTimeMs" })
  flightStartTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=hasCreatorSignedOff" })
  hasCreatorSignedOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inventorySource" })
  inventorySource?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: MarketplaceLabel })
  labels?: MarketplaceLabel[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTimeMs" })
  lastUpdateTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyOfferId" })
  legacyOfferId?: string;

  @SpeakeasyMetadata({ data: "json, name=marketplacePublisherProfileId" })
  marketplacePublisherProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privateAuctionId" })
  privateAuctionId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProvidedForecast" })
  publisherProvidedForecast?: PublisherProvidedForecast;

  @SpeakeasyMetadata({ data: "json, name=revisionNumber" })
  revisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: Seller;

  @SpeakeasyMetadata({ data: "json, name=sharedTargetings", elemType: SharedTargeting })
  sharedTargetings?: SharedTargeting[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: DealTerms;

  @SpeakeasyMetadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
