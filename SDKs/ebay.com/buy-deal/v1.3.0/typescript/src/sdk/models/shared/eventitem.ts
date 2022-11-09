import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";
import { Image } from "./image";
import { MarketingPrice } from "./marketingprice";
import { Amount } from "./amount";
import { ShippingOption } from "./shippingoption";
import { Amount } from "./amount";


// EventItem
/** 
 * The detailed data returned for the event item.
**/
export class EventItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImages", elemType: shared.Image })
  additionalImages?: Image[];

  @Metadata({ data: "json, name=categoryAncestorIds" })
  categoryAncestorIds?: string[];

  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=energyEfficiencyClass" })
  energyEfficiencyClass?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=itemAffiliateWebUrl" })
  itemAffiliateWebUrl?: string;

  @Metadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @Metadata({ data: "json, name=itemGroupType" })
  itemGroupType?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=itemWebUrl" })
  itemWebUrl?: string;

  @Metadata({ data: "json, name=legacyItemId" })
  legacyItemId?: string;

  @Metadata({ data: "json, name=marketingPrice" })
  marketingPrice?: MarketingPrice;

  @Metadata({ data: "json, name=price" })
  price?: Amount;

  @Metadata({ data: "json, name=qualifiedPrograms" })
  qualifiedPrograms?: string[];

  @Metadata({ data: "json, name=shippingOptions", elemType: shared.ShippingOption })
  shippingOptions?: ShippingOption[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=unitPrice" })
  unitPrice?: Amount;

  @Metadata({ data: "json, name=unitPricingMeasure" })
  unitPricingMeasure?: string;
}
