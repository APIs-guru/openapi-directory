import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=CompliantSummary" })
  compliantSummary?: CompliantSummary;

  @SpeakeasyMetadata({ data: "json, name=ExecutionSummary" })
  executionSummary?: ComplianceExecutionSummary;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantSummary" })
  nonCompliantSummary?: NonCompliantSummary;

  @SpeakeasyMetadata({ data: "json, name=OverallSeverity" })
  overallSeverity?: ComplianceSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ComplianceStatusEnum;
}
