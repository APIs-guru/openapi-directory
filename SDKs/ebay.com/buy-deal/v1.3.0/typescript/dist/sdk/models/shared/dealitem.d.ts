import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { MarketingPrice } from "./marketingprice";
import { Amount } from "./amount";
import { ShippingOption } from "./shippingoption";
/**
 * The detailed data returned for the deal item.
**/
export declare class DealItem extends SpeakeasyBase {
    additionalImages?: Image[];
    categoryAncestorIds?: string[];
    categoryId?: string;
    commissionable?: boolean;
    dealAffiliateWebUrl?: string;
    dealEndDate?: string;
    dealStartDate?: string;
    dealWebUrl?: string;
    energyEfficiencyClass?: string;
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
