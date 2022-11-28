import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageContentTypeEnum } from "./messagecontenttypeenum";
import { ImageResponseCard } from "./imageresponsecard";



// Message
/** 
 * Container for text that is returned to the customer..
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType: MessageContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=imageResponseCard" })
  imageResponseCard?: ImageResponseCard;
}
