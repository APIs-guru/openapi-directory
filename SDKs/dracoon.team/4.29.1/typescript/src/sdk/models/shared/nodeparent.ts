import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeParent
/** 
 * Parent node
**/
export class NodeParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
