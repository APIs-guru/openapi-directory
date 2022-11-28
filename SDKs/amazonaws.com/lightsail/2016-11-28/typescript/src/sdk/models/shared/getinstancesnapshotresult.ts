import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceSnapshot } from "./instancesnapshot";



export class GetInstanceSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceSnapshot" })
  instanceSnapshot?: InstanceSnapshot;
}
