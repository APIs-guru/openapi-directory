import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The number of managed instances found for each patch severity level defined in the request filter.
**/
export declare class SeveritySummary extends SpeakeasyBase {
    criticalCount?: number;
    highCount?: number;
    informationalCount?: number;
    lowCount?: number;
    mediumCount?: number;
    unspecifiedCount?: number;
}
