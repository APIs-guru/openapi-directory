import { SpeakeasyBase } from "../../../internal/utils";
import { Aspect } from "./aspect";
/**
 * The type that defines the fields for the aspects of a product.
**/
export declare class Product extends SpeakeasyBase {
    aspects?: Aspect[];
    brand?: string;
    description?: string;
    epid?: string;
    imageUrls?: string[];
    title?: string;
}
