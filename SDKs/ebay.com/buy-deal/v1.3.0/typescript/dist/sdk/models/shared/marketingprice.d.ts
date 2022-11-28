import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A type that describes the seller discount.
**/
export declare class MarketingPrice extends SpeakeasyBase {
    discountAmount?: Amount;
    discountPercentage?: string;
    originalPrice?: Amount;
    priceTreatment?: string;
}
