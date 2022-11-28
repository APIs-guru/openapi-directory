import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains information about a sales promotion that is applied to a line item.
**/
export declare class AppliedPromotion extends SpeakeasyBase {
    description?: string;
    discountAmount?: Amount;
    promotionId?: string;
}
