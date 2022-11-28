import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeletedNodeSummaryTypeEnum {
    Folder = "folder",
    File = "file"
}
/**
 * Deleted node information (Deleted node can be a folder or file)
**/
export declare class DeletedNodeSummary extends SpeakeasyBase {
    cntVersions: number;
    firstDeletedAt: Date;
    lastDeletedAt: Date;
    lastDeletedNodeId: number;
    name: string;
    parentId: number;
    parentPath: string;
    timestampCreation?: Date;
    timestampModification?: Date;
    type: DeletedNodeSummaryTypeEnum;
}
