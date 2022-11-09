import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaselineOverride } from "./baselineoverride";


export class GetDeployablePatchSnapshotForInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineOverride" })
  baselineOverride?: BaselineOverride;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId: string;
}
