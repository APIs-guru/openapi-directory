import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class DescribeWorkspaceSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RebuildSnapshots", elemType: Snapshot })
  rebuildSnapshots?: Snapshot[];

  @SpeakeasyMetadata({ data: "json, name=RestoreSnapshots", elemType: Snapshot })
  restoreSnapshots?: Snapshot[];
}
