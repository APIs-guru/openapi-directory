import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating folder's metadata
**/
export declare class UpdateFolderRequest extends SpeakeasyBase {
    name?: string;
    notes?: string;
    timestampCreation?: Date;
    timestampModification?: Date;
}
