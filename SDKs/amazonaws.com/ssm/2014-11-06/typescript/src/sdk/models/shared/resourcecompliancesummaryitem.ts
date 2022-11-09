import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompliantSummary } from "./compliantsummary";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { NonCompliantSummary } from "./noncompliantsummary";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";


// ResourceComplianceSummaryItem
/** 
 * Compliance summary information for a specific resource. 
**/
export class ResourceComplianceSummaryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=CompliantSummary" })
  compliantSummary?: CompliantSummary;

  @Metadata({ data: "json, name=ExecutionSummary" })
  executionSummary?: ComplianceExecutionSummary;

  @Metadata({ data: "json, name=NonCompliantSummary" })
  nonCompliantSummary?: NonCompliantSummary;

  @Metadata({ data: "json, name=OverallSeverity" })
  overallSeverity?: ComplianceSeverityEnum;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ComplianceStatusEnum;
}
