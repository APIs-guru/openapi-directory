import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";



// DbClusterSnapshotMessage
/** 
 *  Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action. 
**/
export class DbClusterSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshot })
  dbClusterSnapshots?: DbClusterSnapshot[];

  @SpeakeasyMetadata()
  marker?: string;
}
