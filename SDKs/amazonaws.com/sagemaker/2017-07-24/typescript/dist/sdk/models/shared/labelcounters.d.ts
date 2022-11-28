import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a breakdown of the number of objects labeled.
**/
export declare class LabelCounters extends SpeakeasyBase {
    failedNonRetryableError?: number;
    humanLabeled?: number;
    machineLabeled?: number;
    totalLabeled?: number;
    unlabeled?: number;
}
