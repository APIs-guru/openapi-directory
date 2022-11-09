import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Snapshot } from "./snapshot";
import { Snapshot } from "./snapshot";


export class DescribeWorkspaceSnapshotsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=RebuildSnapshots", elemType: shared.Snapshot })
  rebuildSnapshots?: Snapshot[];

  @Metadata({ data: "json, name=RestoreSnapshots", elemType: shared.Snapshot })
  restoreSnapshots?: Snapshot[];
}
