import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type specifies the selection rules used to create a campaign.
**/
export declare class SelectionRule extends SpeakeasyBase {
    brands?: string[];
    categoryIds?: string[];
    categoryScope?: string;
    listingConditionIds?: string[];
    maxPrice?: Amount;
    minPrice?: Amount;
}
