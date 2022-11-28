import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
/**
 * Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
**/
export declare class Shard extends SpeakeasyBase {
    name?: string;
    nodes?: Node[];
    numberOfNodes?: number;
    slots?: string;
    status?: string;
}
