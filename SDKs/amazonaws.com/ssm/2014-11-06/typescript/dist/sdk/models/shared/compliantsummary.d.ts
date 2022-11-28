import { SpeakeasyBase } from "../../../internal/utils";
import { SeveritySummary } from "./severitysummary";
/**
 * A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
**/
export declare class CompliantSummary extends SpeakeasyBase {
    compliantCount?: number;
    severitySummary?: SeveritySummary;
}
