import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePatchGroupStateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances" })
  instances?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithCriticalNonCompliantPatches" })
  instancesWithCriticalNonCompliantPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithFailedPatches" })
  instancesWithFailedPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledOtherPatches" })
  instancesWithInstalledOtherPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledPatches" })
  instancesWithInstalledPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledPendingRebootPatches" })
  instancesWithInstalledPendingRebootPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithInstalledRejectedPatches" })
  instancesWithInstalledRejectedPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithMissingPatches" })
  instancesWithMissingPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithNotApplicablePatches" })
  instancesWithNotApplicablePatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithOtherNonCompliantPatches" })
  instancesWithOtherNonCompliantPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithSecurityNonCompliantPatches" })
  instancesWithSecurityNonCompliantPatches?: number;

  @SpeakeasyMetadata({ data: "json, name=InstancesWithUnreportedNotApplicablePatches" })
  instancesWithUnreportedNotApplicablePatches?: number;
}
