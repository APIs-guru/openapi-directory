import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a parameter group.
**/
export declare class ClusterParameterGroup extends SpeakeasyBase {
    description?: string;
    parameterGroupFamily?: string;
    parameterGroupName?: string;
    tags?: Tag[];
}
