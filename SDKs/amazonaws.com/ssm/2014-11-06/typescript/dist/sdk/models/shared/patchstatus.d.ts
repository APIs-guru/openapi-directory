import { SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchDeploymentStatusEnum } from "./patchdeploymentstatusenum";
/**
 * Information about the approval status of a patch.
**/
export declare class PatchStatus extends SpeakeasyBase {
    approvalDate?: Date;
    complianceLevel?: PatchComplianceLevelEnum;
    deploymentStatus?: PatchDeploymentStatusEnum;
}
