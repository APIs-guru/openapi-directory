import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshotAttribute } from "./dbsnapshotattribute";



// DbSnapshotAttributesResult
/** 
 * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p>
**/
export class DbSnapshotAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSnapshotAttribute })
  dbSnapshotAttributes?: DbSnapshotAttribute[];

  @SpeakeasyMetadata()
  dbSnapshotIdentifier?: string;
}
