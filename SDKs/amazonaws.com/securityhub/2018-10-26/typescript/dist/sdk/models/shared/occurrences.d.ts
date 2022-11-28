import { SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";
import { Range } from "./range";
import { Page } from "./page";
import { Record } from "./record";
/**
 * The detected occurrences of sensitive data.
**/
export declare class Occurrences extends SpeakeasyBase {
    cells?: Cell[];
    lineRanges?: Range[];
    offsetRanges?: Range[];
    pages?: Page[];
    records?: Record[];
}
