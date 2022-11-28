import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";



export class CreateDbClusterSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterSnapshot?: DbClusterSnapshot;
}
