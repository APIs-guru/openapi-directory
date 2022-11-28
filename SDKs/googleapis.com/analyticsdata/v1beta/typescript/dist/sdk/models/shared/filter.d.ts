import { SpeakeasyBase } from "../../../internal/utils";
import { BetweenFilter } from "./betweenfilter";
import { InListFilter } from "./inlistfilter";
import { NumericFilter } from "./numericfilter";
import { StringFilter } from "./stringfilter";
/**
 * An expression to filter dimension or metric values.
**/
export declare class Filter extends SpeakeasyBase {
    betweenFilter?: BetweenFilter;
    fieldName?: string;
    inListFilter?: InListFilter;
    numericFilter?: NumericFilter;
    stringFilter?: StringFilter;
}
