import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Aspect } from "./aspect";
/**
 * This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the getProduct URL for retrieving the product details.
**/
export declare class ProductSummary extends SpeakeasyBase {
    additionalImages?: Image[];
    aspects?: Aspect[];
    brand?: string;
    ean?: string[];
    epid?: string;
    gtin?: string[];
    image?: Image;
    isbn?: string[];
    mpn?: string[];
    productHref?: string;
    productWebUrl?: string;
    title?: string;
    upc?: string[];
}
