import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
**/
export declare class DbClusterBacktrack extends SpeakeasyBase {
    backtrackIdentifier?: string;
    backtrackRequestCreationTime?: Date;
    backtrackTo?: Date;
    backtrackedFrom?: Date;
    dbClusterIdentifier?: string;
    status?: string;
}
