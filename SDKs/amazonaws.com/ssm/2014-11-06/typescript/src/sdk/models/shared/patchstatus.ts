import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchDeploymentStatusEnum } from "./patchdeploymentstatusenum";


// PatchStatus
/** 
 * Information about the approval status of a patch.
**/
export class PatchStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApprovalDate" })
  approvalDate?: Date;

  @Metadata({ data: "json, name=ComplianceLevel" })
  complianceLevel?: PatchComplianceLevelEnum;

  @Metadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: PatchDeploymentStatusEnum;
}
