import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";
/**
 * Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on.
**/
export declare class ComplianceItem extends SpeakeasyBase {
    complianceType?: string;
    details?: Map<string, string>;
    executionSummary?: ComplianceExecutionSummary;
    id?: string;
    resourceId?: string;
    resourceType?: string;
    severity?: ComplianceSeverityEnum;
    status?: ComplianceStatusEnum;
    title?: string;
}
