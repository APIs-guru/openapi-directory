import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";



export class DbClusterSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshot })
  dbClusterSnapshots?: DbClusterSnapshot[];

  @SpeakeasyMetadata()
  marker?: string;
}
