import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";


// ComplianceItem
/** 
 * Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on.
**/
export class ComplianceItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=Details" })
  details?: Map<string, string>;

  @Metadata({ data: "json, name=ExecutionSummary" })
  executionSummary?: ComplianceExecutionSummary;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=Severity" })
  severity?: ComplianceSeverityEnum;

  @Metadata({ data: "json, name=Status" })
  status?: ComplianceStatusEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
