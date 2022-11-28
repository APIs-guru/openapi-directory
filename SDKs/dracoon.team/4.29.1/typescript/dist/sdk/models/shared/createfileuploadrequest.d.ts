import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for creating an upload channel
**/
export declare class CreateFileUploadRequest extends SpeakeasyBase {
    classification?: number;
    directS3Upload?: boolean;
    expiration?: ObjectExpiration;
    name: string;
    notes?: string;
    parentId: number;
    size?: number;
    timestampCreation?: Date;
    timestampModification?: Date;
}
