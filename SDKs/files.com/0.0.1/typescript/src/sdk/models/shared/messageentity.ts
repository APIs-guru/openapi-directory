import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageCommentEntity } from "./messagecommententity";



// MessageEntity
/** 
 * List Messages
**/
export class MessageEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: MessageCommentEntity;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
