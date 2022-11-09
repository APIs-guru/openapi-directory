import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Button } from "./button";


// GenericAttachment
/** 
 * Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. 
**/
export class GenericAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentLinkUrl" })
  attachmentLinkUrl?: string;

  @Metadata({ data: "json, name=buttons", elemType: shared.Button })
  buttons?: Button[];

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=subTitle" })
  subTitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
