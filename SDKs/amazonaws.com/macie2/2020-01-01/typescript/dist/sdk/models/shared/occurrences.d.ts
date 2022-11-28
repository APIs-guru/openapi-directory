import { SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";
import { Range } from "./range";
import { Page } from "./page";
import { Record } from "./record";
/**
 * Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.
**/
export declare class Occurrences extends SpeakeasyBase {
    cells?: Cell[];
    lineRanges?: Range[];
    offsetRanges?: Range[];
    pages?: Page[];
    records?: Record[];
}
