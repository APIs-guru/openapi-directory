import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductViewSummary } from "./productviewsummary";
import { StatusEnum } from "./statusenum";
/**
 * Information about a product view.
**/
export declare class ProductViewDetail extends SpeakeasyBase {
    createdTime?: Date;
    productArn?: string;
    productViewSummary?: ProductViewSummary;
    status?: StatusEnum;
}
