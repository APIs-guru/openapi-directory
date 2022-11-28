import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";



// DescribeAttachmentResponse
/** 
 * The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.
**/
export class DescribeAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: Attachment;
}
