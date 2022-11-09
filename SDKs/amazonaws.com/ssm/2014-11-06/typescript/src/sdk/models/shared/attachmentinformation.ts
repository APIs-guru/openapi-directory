import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttachmentInformation
/** 
 * An attribute of an attachment, such as the attachment name.
**/
export class AttachmentInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
