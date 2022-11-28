import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";



// GenericAttachment
/** 
 * Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. 
**/
export class GenericAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentLinkUrl" })
  attachmentLinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: Button })
  buttons?: Button[];

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subTitle" })
  subTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
