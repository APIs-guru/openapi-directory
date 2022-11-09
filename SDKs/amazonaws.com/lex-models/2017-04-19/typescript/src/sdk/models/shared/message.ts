import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentTypeEnum } from "./contenttypeenum";


// Message
/** 
 * The message object that provides the message text and its type.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=contentType" })
  contentType: ContentTypeEnum;

  @Metadata({ data: "json, name=groupNumber" })
  groupNumber?: number;
}
