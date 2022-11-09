import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchOperationTypeEnum } from "./patchoperationtypeenum";
import { RebootOptionEnum } from "./rebootoptionenum";


// InstancePatchState
/** 
 * Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
**/
export class InstancePatchState extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId: string;

  @Metadata({ data: "json, name=CriticalNonCompliantCount" })
  criticalNonCompliantCount?: number;

  @Metadata({ data: "json, name=FailedCount" })
  failedCount?: number;

  @Metadata({ data: "json, name=InstallOverrideList" })
  installOverrideList?: string;

  @Metadata({ data: "json, name=InstalledCount" })
  installedCount?: number;

  @Metadata({ data: "json, name=InstalledOtherCount" })
  installedOtherCount?: number;

  @Metadata({ data: "json, name=InstalledPendingRebootCount" })
  installedPendingRebootCount?: number;

  @Metadata({ data: "json, name=InstalledRejectedCount" })
  installedRejectedCount?: number;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=LastNoRebootInstallOperationTime" })
  lastNoRebootInstallOperationTime?: Date;

  @Metadata({ data: "json, name=MissingCount" })
  missingCount?: number;

  @Metadata({ data: "json, name=NotApplicableCount" })
  notApplicableCount?: number;

  @Metadata({ data: "json, name=Operation" })
  operation: PatchOperationTypeEnum;

  @Metadata({ data: "json, name=OperationEndTime" })
  operationEndTime: Date;

  @Metadata({ data: "json, name=OperationStartTime" })
  operationStartTime: Date;

  @Metadata({ data: "json, name=OtherNonCompliantCount" })
  otherNonCompliantCount?: number;

  @Metadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup: string;

  @Metadata({ data: "json, name=RebootOption" })
  rebootOption?: RebootOptionEnum;

  @Metadata({ data: "json, name=SecurityNonCompliantCount" })
  securityNonCompliantCount?: number;

  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @Metadata({ data: "json, name=UnreportedNotApplicableCount" })
  unreportedNotApplicableCount?: number;
}
