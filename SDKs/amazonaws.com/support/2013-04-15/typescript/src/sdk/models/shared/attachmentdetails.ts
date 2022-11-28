import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachmentDetails
/** 
 * The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.
**/
export class AttachmentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;
}
