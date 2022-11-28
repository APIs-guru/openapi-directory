import { SpeakeasyBase } from "../../../internal/utils";
import { ProductVisibility } from "./productvisibility";
export declare enum ProductSetProductSetBehaviorEnum {
    Unknown = "unknown",
    Whitelist = "whitelist",
    IncludeAll = "includeAll",
    AllApproved = "allApproved"
}
/**
 * A set of products.
**/
export declare class ProductSet extends SpeakeasyBase {
    productId?: string[];
    productSetBehavior?: ProductSetProductSetBehaviorEnum;
    productVisibility?: ProductVisibility[];
}
