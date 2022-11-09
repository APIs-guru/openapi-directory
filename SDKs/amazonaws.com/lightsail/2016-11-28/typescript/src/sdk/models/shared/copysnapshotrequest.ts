import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionNameEnum } from "./regionnameenum";


export class CopySnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=restoreDate" })
  restoreDate?: string;

  @Metadata({ data: "json, name=sourceRegion" })
  sourceRegion: RegionNameEnum;

  @Metadata({ data: "json, name=sourceResourceName" })
  sourceResourceName?: string;

  @Metadata({ data: "json, name=sourceSnapshotName" })
  sourceSnapshotName?: string;

  @Metadata({ data: "json, name=targetSnapshotName" })
  targetSnapshotName: string;

  @Metadata({ data: "json, name=useLatestRestorableAutoSnapshot" })
  useLatestRestorableAutoSnapshot?: boolean;
}
