import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchOperationTypeEnum } from "./patchoperationtypeenum";
import { RebootOptionEnum } from "./rebootoptionenum";



// InstancePatchState
/** 
 * Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
**/
export class InstancePatchState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId: string;

  @SpeakeasyMetadata({ data: "json, name=CriticalNonCompliantCount" })
  criticalNonCompliantCount?: number;

  @SpeakeasyMetadata({ data: "json, name=FailedCount" })
  failedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstallOverrideList" })
  installOverrideList?: string;

  @SpeakeasyMetadata({ data: "json, name=InstalledCount" })
  installedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstalledOtherCount" })
  installedOtherCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstalledPendingRebootCount" })
  installedPendingRebootCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstalledRejectedCount" })
  installedRejectedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=LastNoRebootInstallOperationTime" })
  lastNoRebootInstallOperationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MissingCount" })
  missingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NotApplicableCount" })
  notApplicableCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation: PatchOperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=OperationEndTime" })
  operationEndTime: Date;

  @SpeakeasyMetadata({ data: "json, name=OperationStartTime" })
  operationStartTime: Date;

  @SpeakeasyMetadata({ data: "json, name=OtherNonCompliantCount" })
  otherNonCompliantCount?: number;

  @SpeakeasyMetadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup: string;

  @SpeakeasyMetadata({ data: "json, name=RebootOption" })
  rebootOption?: RebootOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=SecurityNonCompliantCount" })
  securityNonCompliantCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=UnreportedNotApplicableCount" })
  unreportedNotApplicableCount?: number;
}
