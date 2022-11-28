import { SpeakeasyBase } from "../../../internal/utils";
import { Exclusion } from "./exclusion";
/**
 * This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
**/
export declare class ProductAdoptionPolicy extends SpeakeasyBase {
    categoryId?: string;
    categoryTreeId?: string;
    exclusion?: Exclusion;
    productRequired?: boolean;
}
