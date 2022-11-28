import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroup } from "./dbclusterparametergroup";
export declare class DbClusterParameterGroupsMessage extends SpeakeasyBase {
    dbClusterParameterGroups?: DbClusterParameterGroup[];
    marker?: string;
}
