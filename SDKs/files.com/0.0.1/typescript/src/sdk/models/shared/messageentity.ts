import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageCommentEntity } from "./messagecommententity";


// MessageEntity
/** 
 * List Messages
**/
export class MessageEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: MessageCommentEntity;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
