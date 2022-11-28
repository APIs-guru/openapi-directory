import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterBacktrack } from "./dbclusterbacktrack";



// DbClusterBacktrackMessage
/** 
 * Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
**/
export class DbClusterBacktrackMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterBacktrack })
  dbClusterBacktracks?: DbClusterBacktrack[];

  @SpeakeasyMetadata()
  marker?: string;
}
