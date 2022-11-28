import { SpeakeasyBase } from "../../../internal/utils";
import { LongTermPricingListEntry } from "./longtermpricinglistentry";
export declare class ListLongTermPricingResult extends SpeakeasyBase {
    longTermPricingEntries?: LongTermPricingListEntry[];
    nextToken?: string;
}
