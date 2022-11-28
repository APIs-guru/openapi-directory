import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
/**
 * A collection of finding attributes used to sort findings.
**/
export declare class SortCriterion extends SpeakeasyBase {
    field?: string;
    sortOrder?: SortOrderEnum;
}
