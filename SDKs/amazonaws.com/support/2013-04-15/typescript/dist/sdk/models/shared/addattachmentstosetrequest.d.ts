import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Attachment } from "./attachment";
export declare class AddAttachmentsToSetRequest extends SpeakeasyBase {
    attachmentSetId?: string;
    attachments: Attachment[];
}
