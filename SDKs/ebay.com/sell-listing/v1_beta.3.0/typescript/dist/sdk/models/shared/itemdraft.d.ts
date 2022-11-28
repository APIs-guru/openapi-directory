import { SpeakeasyBase } from "../../../internal/utils";
import { Charity } from "./charity";
import { PricingSummary } from "./pricingsummary";
import { Product } from "./product";
/**
 * The type that defines the fields for the listing details.
**/
export declare class ItemDraft extends SpeakeasyBase {
    categoryId?: string;
    charity?: Charity;
    condition?: string;
    format?: string;
    pricingSummary?: PricingSummary;
    product?: Product;
}
