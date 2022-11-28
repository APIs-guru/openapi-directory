import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterBacktrack } from "./dbclusterbacktrack";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
**/
export declare class DbClusterBacktrackMessage extends SpeakeasyBase {
    dbClusterBacktracks?: DbClusterBacktrack[];
    marker?: string;
}
