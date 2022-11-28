import { SpeakeasyBase } from "../../../internal/utils";
import { Adjustment } from "./adjustment";
/**
 * CVSS scores from the advisory related to the vulnerability.
**/
export declare class Cvss extends SpeakeasyBase {
    adjustments?: Adjustment[];
    baseScore?: number;
    baseVector?: string;
    source?: string;
    version?: string;
}
