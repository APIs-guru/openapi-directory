import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceSnapshot } from "./instancesnapshot";



export class GetInstanceSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceSnapshots", elemType: InstanceSnapshot })
  instanceSnapshots?: InstanceSnapshot[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
