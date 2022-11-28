import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentsSource } from "./attachmentssource";
import { DocumentFormatEnum } from "./documentformatenum";
export declare class UpdateDocumentRequest extends SpeakeasyBase {
    attachments?: AttachmentsSource[];
    content: string;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentVersion?: string;
    name: string;
    targetType?: string;
    versionName?: string;
}
