import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Describes the default cluster parameters for a parameter group family.
**/
export declare class DefaultClusterParameters extends SpeakeasyBase {
    marker?: string;
    parameterGroupFamily?: string;
    parameters?: Parameter[];
}
