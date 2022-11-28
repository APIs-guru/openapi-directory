import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A complex type that defines the offer being made to an &quot;interested&quot; buyer.
**/
export declare class OfferedItem extends SpeakeasyBase {
    discountPercentage?: string;
    listingId?: string;
    price?: Amount;
    quantity?: number;
}
