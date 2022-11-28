import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaselineOverride } from "./baselineoverride";



export class GetDeployablePatchSnapshotForInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineOverride" })
  baselineOverride?: BaselineOverride;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId: string;
}
