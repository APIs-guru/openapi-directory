import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum PricePricingTypeEnum {
    PricingTypeUnspecified = "PRICING_TYPE_UNSPECIFIED",
    CostPerMille = "COST_PER_MILLE",
    CostPerDay = "COST_PER_DAY"
}


// Price
/** 
 * Represents a price and a pricing type for a product / deal.
**/
export class Price extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Money;

  @SpeakeasyMetadata({ data: "json, name=pricingType" })
  pricingType?: PricePricingTypeEnum;
}
