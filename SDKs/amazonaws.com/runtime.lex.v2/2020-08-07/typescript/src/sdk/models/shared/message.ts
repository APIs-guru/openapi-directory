import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageContentTypeEnum } from "./messagecontenttypeenum";
import { ImageResponseCard } from "./imageresponsecard";


// Message
/** 
 * Container for text that is returned to the customer..
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType: MessageContentTypeEnum;

  @Metadata({ data: "json, name=imageResponseCard" })
  imageResponseCard?: ImageResponseCard;
}
