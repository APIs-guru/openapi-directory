import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum PricePricingTypeEnum {
    PricingTypeUnspecified = "PRICING_TYPE_UNSPECIFIED",
    CostPerMille = "COST_PER_MILLE",
    CostPerDay = "COST_PER_DAY"
}
/**
 * Represents a price and a pricing type for a product / deal.
**/
export declare class Price extends SpeakeasyBase {
    amount?: Money;
    pricingType?: PricePricingTypeEnum;
}
