import { SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersion } from "./dbengineversion";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action.
**/
export declare class DbEngineVersionMessage extends SpeakeasyBase {
    dbEngineVersions?: DbEngineVersion[];
    marker?: string;
}
