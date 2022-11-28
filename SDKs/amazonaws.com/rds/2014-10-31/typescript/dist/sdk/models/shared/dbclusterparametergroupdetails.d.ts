import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
**/
export declare class DbClusterParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: Parameter[];
}
