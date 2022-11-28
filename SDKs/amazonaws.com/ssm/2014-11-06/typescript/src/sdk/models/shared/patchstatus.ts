import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchDeploymentStatusEnum } from "./patchdeploymentstatusenum";



// PatchStatus
/** 
 * Information about the approval status of a patch.
**/
export class PatchStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovalDate" })
  approvalDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ComplianceLevel" })
  complianceLevel?: PatchComplianceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: PatchDeploymentStatusEnum;
}
