import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentHashTypeEnum } from "./attachmenthashtypeenum";
/**
 * A structure that includes attributes that describe a document attachment.
**/
export declare class AttachmentContent extends SpeakeasyBase {
    hash?: string;
    hashType?: AttachmentHashTypeEnum;
    name?: string;
    size?: number;
    url?: string;
}
