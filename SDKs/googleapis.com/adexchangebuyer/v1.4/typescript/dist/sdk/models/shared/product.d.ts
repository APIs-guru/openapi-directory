import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { DeliveryControl } from "./deliverycontrol";
import { MarketplaceLabel } from "./marketplacelabel";
import { PublisherProvidedForecast } from "./publisherprovidedforecast";
import { Seller } from "./seller";
import { SharedTargeting } from "./sharedtargeting";
import { DealTerms } from "./dealterms";
/**
 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
 *
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
**/
export declare class Product extends SpeakeasyBase {
    billedBuyer?: Buyer;
    buyer?: Buyer;
    creationTimeMs?: string;
    creatorContacts?: ContactInformation[];
    creatorRole?: string;
    deliveryControl?: DeliveryControl;
    flightEndTimeMs?: string;
    flightStartTimeMs?: string;
    hasCreatorSignedOff?: boolean;
    inventorySource?: string;
    kind?: string;
    labels?: MarketplaceLabel[];
    lastUpdateTimeMs?: string;
    legacyOfferId?: string;
    marketplacePublisherProfileId?: string;
    name?: string;
    privateAuctionId?: string;
    productId?: string;
    publisherProfileId?: string;
    publisherProvidedForecast?: PublisherProvidedForecast;
    revisionNumber?: string;
    seller?: Seller;
    sharedTargetings?: SharedTargeting[];
    state?: string;
    syndicationProduct?: string;
    terms?: DealTerms;
    webPropertyCode?: string;
}
