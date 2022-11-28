import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubscribedNodeTypeEnum {
    Room = "room",
    Folder = "folder",
    File = "file"
}
/**
 * Subscribed node information
**/
export declare class SubscribedNode extends SpeakeasyBase {
    authParentId?: number;
    id: number;
    type?: SubscribedNodeTypeEnum;
}
