import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



// DbClusterMessage
/** 
 * Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
**/
export class DbClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbCluster })
  dbClusters?: DbCluster[];

  @SpeakeasyMetadata()
  marker?: string;
}
