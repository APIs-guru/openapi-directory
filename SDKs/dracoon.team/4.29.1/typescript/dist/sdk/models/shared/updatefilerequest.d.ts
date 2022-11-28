import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating file's metadata
**/
export declare class UpdateFileRequest extends SpeakeasyBase {
    classification?: number;
    expiration?: ObjectExpiration;
    name?: string;
    notes?: string;
    timestampCreation?: Date;
    timestampModification?: Date;
}
