import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceSnapshot } from "./instancesnapshot";


export class GetInstanceSnapshotsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceSnapshots", elemType: shared.InstanceSnapshot })
  instanceSnapshots?: InstanceSnapshot[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
