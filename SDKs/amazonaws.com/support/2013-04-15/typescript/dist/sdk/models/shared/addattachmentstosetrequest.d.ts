import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
export declare class AddAttachmentsToSetRequest extends SpeakeasyBase {
    attachmentSetId?: string;
    attachments: Attachment[];
}
