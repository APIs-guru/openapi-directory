import { SpeakeasyBase } from "../../../internal/utils";
import { PatchOperationTypeEnum } from "./patchoperationtypeenum";
import { RebootOptionEnum } from "./rebootoptionenum";
/**
 * Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
**/
export declare class InstancePatchState extends SpeakeasyBase {
    baselineId: string;
    criticalNonCompliantCount?: number;
    failedCount?: number;
    installOverrideList?: string;
    installedCount?: number;
    installedOtherCount?: number;
    installedPendingRebootCount?: number;
    installedRejectedCount?: number;
    instanceId: string;
    lastNoRebootInstallOperationTime?: Date;
    missingCount?: number;
    notApplicableCount?: number;
    operation: PatchOperationTypeEnum;
    operationEndTime: Date;
    operationStartTime: Date;
    otherNonCompliantCount?: number;
    ownerInformation?: string;
    patchGroup: string;
    rebootOption?: RebootOptionEnum;
    securityNonCompliantCount?: number;
    snapshotId?: string;
    unreportedNotApplicableCount?: number;
}
