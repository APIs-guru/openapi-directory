import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating an upload channel
**/
export declare class CreateShareUploadChannelRequest extends SpeakeasyBase {
    directS3Upload?: boolean;
    name: string;
    password?: string;
    size?: number;
    timestampCreation?: Date;
    timestampModification?: Date;
}
