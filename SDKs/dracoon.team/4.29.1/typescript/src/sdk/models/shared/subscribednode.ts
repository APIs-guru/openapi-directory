import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubscribedNodeTypeEnum {
    Room = "room"
,    Folder = "folder"
,    File = "file"
}


// SubscribedNode
/** 
 * Subscribed node information
**/
export class SubscribedNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=authParentId" })
  authParentId?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type?: SubscribedNodeTypeEnum;
}
