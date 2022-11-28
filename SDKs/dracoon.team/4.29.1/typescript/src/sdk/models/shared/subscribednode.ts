import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubscribedNodeTypeEnum {
    Room = "room",
    Folder = "folder",
    File = "file"
}


// SubscribedNode
/** 
 * Subscribed node information
**/
export class SubscribedNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authParentId" })
  authParentId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SubscribedNodeTypeEnum;
}
