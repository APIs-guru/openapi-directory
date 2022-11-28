import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";



// DbSnapshotMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action. 
**/
export class DbSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSnapshot })
  dbSnapshots?: DbSnapshot[];

  @SpeakeasyMetadata()
  marker?: string;
}
