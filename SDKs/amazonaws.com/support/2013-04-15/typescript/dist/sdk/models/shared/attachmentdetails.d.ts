import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.
**/
export declare class AttachmentDetails extends SpeakeasyBase {
    attachmentId?: string;
    fileName?: string;
}
