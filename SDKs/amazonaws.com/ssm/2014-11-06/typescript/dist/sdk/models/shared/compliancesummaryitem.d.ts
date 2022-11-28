import { SpeakeasyBase } from "../../../internal/utils";
import { CompliantSummary } from "./compliantsummary";
import { NonCompliantSummary } from "./noncompliantsummary";
/**
 * A summary of compliance information by compliance type.
**/
export declare class ComplianceSummaryItem extends SpeakeasyBase {
    complianceType?: string;
    compliantSummary?: CompliantSummary;
    nonCompliantSummary?: NonCompliantSummary;
}
