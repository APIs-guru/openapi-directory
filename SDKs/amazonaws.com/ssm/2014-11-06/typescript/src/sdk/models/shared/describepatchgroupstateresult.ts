import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePatchGroupStateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances" })
  instances?: number;

  @Metadata({ data: "json, name=InstancesWithCriticalNonCompliantPatches" })
  instancesWithCriticalNonCompliantPatches?: number;

  @Metadata({ data: "json, name=InstancesWithFailedPatches" })
  instancesWithFailedPatches?: number;

  @Metadata({ data: "json, name=InstancesWithInstalledOtherPatches" })
  instancesWithInstalledOtherPatches?: number;

  @Metadata({ data: "json, name=InstancesWithInstalledPatches" })
  instancesWithInstalledPatches?: number;

  @Metadata({ data: "json, name=InstancesWithInstalledPendingRebootPatches" })
  instancesWithInstalledPendingRebootPatches?: number;

  @Metadata({ data: "json, name=InstancesWithInstalledRejectedPatches" })
  instancesWithInstalledRejectedPatches?: number;

  @Metadata({ data: "json, name=InstancesWithMissingPatches" })
  instancesWithMissingPatches?: number;

  @Metadata({ data: "json, name=InstancesWithNotApplicablePatches" })
  instancesWithNotApplicablePatches?: number;

  @Metadata({ data: "json, name=InstancesWithOtherNonCompliantPatches" })
  instancesWithOtherNonCompliantPatches?: number;

  @Metadata({ data: "json, name=InstancesWithSecurityNonCompliantPatches" })
  instancesWithSecurityNonCompliantPatches?: number;

  @Metadata({ data: "json, name=InstancesWithUnreportedNotApplicablePatches" })
  instancesWithUnreportedNotApplicablePatches?: number;
}
