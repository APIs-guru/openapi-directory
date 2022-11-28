import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 *  Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
**/
export declare class EngineDefaults extends SpeakeasyBase {
    dbParameterGroupFamily?: string;
    marker?: string;
    parameters?: Parameter[];
}
