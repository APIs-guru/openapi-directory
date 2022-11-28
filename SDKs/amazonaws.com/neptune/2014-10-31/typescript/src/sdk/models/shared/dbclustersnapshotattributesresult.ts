import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotAttribute } from "./dbclustersnapshotattribute";



// DbClusterSnapshotAttributesResult
/** 
 * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
**/
export class DbClusterSnapshotAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshotAttribute })
  dbClusterSnapshotAttributes?: DbClusterSnapshotAttribute[];

  @SpeakeasyMetadata()
  dbClusterSnapshotIdentifier?: string;
}
