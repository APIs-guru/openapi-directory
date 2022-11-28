import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { MarketingPrice } from "./marketingprice";
import { Amount } from "./amount";
import { ShippingOption } from "./shippingoption";



// EventItem
/** 
 * The detailed data returned for the event item.
**/
export class EventItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalImages", elemType: Image })
  additionalImages?: Image[];

  @SpeakeasyMetadata({ data: "json, name=categoryAncestorIds" })
  categoryAncestorIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=energyEfficiencyClass" })
  energyEfficiencyClass?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=itemAffiliateWebUrl" })
  itemAffiliateWebUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=itemGroupType" })
  itemGroupType?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=itemWebUrl" })
  itemWebUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyItemId" })
  legacyItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingPrice" })
  marketingPrice?: MarketingPrice;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Amount;

  @SpeakeasyMetadata({ data: "json, name=qualifiedPrograms" })
  qualifiedPrograms?: string[];

  @SpeakeasyMetadata({ data: "json, name=shippingOptions", elemType: ShippingOption })
  shippingOptions?: ShippingOption[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: Amount;

  @SpeakeasyMetadata({ data: "json, name=unitPricingMeasure" })
  unitPricingMeasure?: string;
}
