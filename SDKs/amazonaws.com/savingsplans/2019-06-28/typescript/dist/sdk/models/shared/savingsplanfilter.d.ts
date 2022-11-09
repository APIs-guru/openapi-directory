import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SavingsPlansFilterNameEnum } from "./savingsplansfilternameenum";
/**
 * Information about a filter.
**/
export declare class SavingsPlanFilter extends SpeakeasyBase {
    name?: SavingsPlansFilterNameEnum;
    values?: string[];
}
