import { SpeakeasyBase } from "../../../internal/utils";
import { CompliantSummary } from "./compliantsummary";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { NonCompliantSummary } from "./noncompliantsummary";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";
/**
 * Compliance summary information for a specific resource.
**/
export declare class ResourceComplianceSummaryItem extends SpeakeasyBase {
    complianceType?: string;
    compliantSummary?: CompliantSummary;
    executionSummary?: ComplianceExecutionSummary;
    nonCompliantSummary?: NonCompliantSummary;
    overallSeverity?: ComplianceSeverityEnum;
    resourceId?: string;
    resourceType?: string;
    status?: ComplianceStatusEnum;
}
