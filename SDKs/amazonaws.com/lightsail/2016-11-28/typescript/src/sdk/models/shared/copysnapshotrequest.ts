import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionNameEnum } from "./regionnameenum";



export class CopySnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=restoreDate" })
  restoreDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRegion" })
  sourceRegion: RegionNameEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceResourceName" })
  sourceResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceSnapshotName" })
  sourceSnapshotName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetSnapshotName" })
  targetSnapshotName: string;

  @SpeakeasyMetadata({ data: "json, name=useLatestRestorableAutoSnapshot" })
  useLatestRestorableAutoSnapshot?: boolean;
}
