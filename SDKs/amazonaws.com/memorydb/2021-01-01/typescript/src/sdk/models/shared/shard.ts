import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";



// Shard
/** 
 * Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
**/
export class Shard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Nodes", elemType: Node })
  nodes?: Node[];

  @SpeakeasyMetadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=Slots" })
  slots?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
