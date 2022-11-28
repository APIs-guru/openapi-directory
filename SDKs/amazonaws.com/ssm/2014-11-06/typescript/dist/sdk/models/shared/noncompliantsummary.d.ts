import { SpeakeasyBase } from "../../../internal/utils";
import { SeveritySummary } from "./severitysummary";
/**
 * A summary of resources that aren't compliant. The summary is organized according to resource type.
**/
export declare class NonCompliantSummary extends SpeakeasyBase {
    nonCompliantCount?: number;
    severitySummary?: SeveritySummary;
}
