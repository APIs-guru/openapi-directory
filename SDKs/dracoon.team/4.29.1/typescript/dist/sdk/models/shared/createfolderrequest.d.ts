import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating a folder
**/
export declare class CreateFolderRequest extends SpeakeasyBase {
    name: string;
    notes?: string;
    parentId: number;
    timestampCreation?: Date;
    timestampModification?: Date;
}
