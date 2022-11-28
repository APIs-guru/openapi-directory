import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeEnum } from "./contenttypeenum";



// Message
/** 
 * The message object that provides the message text and its type.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType: ContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=groupNumber" })
  groupNumber?: number;
}
