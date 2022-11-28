import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";



// ComplianceItem
/** 
 * Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on.
**/
export class ComplianceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExecutionSummary" })
  executionSummary?: ComplianceExecutionSummary;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: ComplianceSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ComplianceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
