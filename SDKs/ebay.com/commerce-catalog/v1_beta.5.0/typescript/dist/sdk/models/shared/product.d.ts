import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Aspect } from "./aspect";
/**
 * This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.
**/
export declare class Product extends SpeakeasyBase {
    additionalImages?: Image[];
    aspects?: Aspect[];
    brand?: string;
    description?: string;
    ean?: string[];
    epid?: string;
    gtin?: string[];
    image?: Image;
    isbn?: string[];
    mpn?: string[];
    otherApplicableCategoryIds?: string[];
    primaryCategoryId?: string;
    productWebUrl?: string;
    title?: string;
    upc?: string[];
    version?: string;
}
