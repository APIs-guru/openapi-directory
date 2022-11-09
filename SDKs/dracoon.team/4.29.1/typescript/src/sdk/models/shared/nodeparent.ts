import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeParent
/** 
 * Parent node
**/
export class NodeParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
