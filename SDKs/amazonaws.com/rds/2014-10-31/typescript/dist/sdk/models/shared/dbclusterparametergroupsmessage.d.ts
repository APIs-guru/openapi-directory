import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroup } from "./dbclusterparametergroup";
/**
 * <p/>
**/
export declare class DbClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DbClusterParameterGroup[];
    marker?: string;
}
