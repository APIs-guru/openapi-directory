import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductTypeEnum } from "./producttypeenum";
/**
 * Summary information about a product view.
**/
export declare class ProductViewSummary extends SpeakeasyBase {
    distributor?: string;
    hasDefaultPath?: boolean;
    id?: string;
    name?: string;
    owner?: string;
    productId?: string;
    shortDescription?: string;
    supportDescription?: string;
    supportEmail?: string;
    supportUrl?: string;
    type?: ProductTypeEnum;
}
