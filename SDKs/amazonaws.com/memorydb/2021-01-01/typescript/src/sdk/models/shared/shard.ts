import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Node } from "./node";


// Shard
/** 
 * Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
**/
export class Shard extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Nodes", elemType: shared.Node })
  nodes?: Node[];

  @Metadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @Metadata({ data: "json, name=Slots" })
  slots?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
