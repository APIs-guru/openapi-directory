import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { MarketingPrice } from "./marketingprice";
import { Amount } from "./amount";
import { ShippingOption } from "./shippingoption";
/**
 * The detailed data returned for the event item.
**/
export declare class EventItem extends SpeakeasyBase {
    additionalImages?: Image[];
    categoryAncestorIds?: string[];
    categoryId?: string;
    energyEfficiencyClass?: string;
    eventId?: string;
    image?: Image;
    itemAffiliateWebUrl?: string;
    itemGroupId?: string;
    itemGroupType?: string;
    itemId?: string;
    itemWebUrl?: string;
    legacyItemId?: string;
    marketingPrice?: MarketingPrice;
    price?: Amount;
    qualifiedPrograms?: string[];
    shippingOptions?: ShippingOption[];
    title?: string;
    unitPrice?: Amount;
    unitPricingMeasure?: string;
}
