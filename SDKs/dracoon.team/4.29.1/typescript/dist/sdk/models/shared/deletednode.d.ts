import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
export declare enum DeletedNodeTypeEnum {
    Folder = "folder",
    File = "file"
}
/**
 * Deleted node information (Deleted node can be a folder or file)
**/
export declare class DeletedNode extends SpeakeasyBase {
    accessedAt?: Date;
    classification?: number;
    createdAt?: Date;
    createdBy?: UserInfo;
    deletedAt?: Date;
    deletedBy?: UserInfo;
    expireAt?: Date;
    id?: number;
    isEncrypted?: boolean;
    name: string;
    notes?: string;
    parentId: number;
    parentPath: string;
    size?: number;
    type: DeletedNodeTypeEnum;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
