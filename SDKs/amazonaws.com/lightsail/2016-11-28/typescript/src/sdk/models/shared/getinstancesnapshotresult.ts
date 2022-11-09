import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceSnapshot } from "./instancesnapshot";


export class GetInstanceSnapshotResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceSnapshot" })
  instanceSnapshot?: InstanceSnapshot;
}
