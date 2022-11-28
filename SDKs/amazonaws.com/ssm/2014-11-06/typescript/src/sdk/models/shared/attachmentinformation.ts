import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachmentInformation
/** 
 * An attribute of an attachment, such as the attachment name.
**/
export class AttachmentInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
