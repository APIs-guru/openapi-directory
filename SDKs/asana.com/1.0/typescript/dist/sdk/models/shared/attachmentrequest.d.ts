import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachmentRequestFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare enum AttachmentRequestResourceSubtypeEnum {
    AsanaFileAttachments = "asana_file_attachments",
    External = "external"
}
export declare class AttachmentRequest extends SpeakeasyBase {
    file?: AttachmentRequestFile;
    name?: string;
    resourceSubtype?: AttachmentRequestResourceSubtypeEnum;
    url?: string;
}
