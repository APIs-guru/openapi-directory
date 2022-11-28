import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageCommentReactionEntity } from "./messagecommentreactionentity";



// MessageCommentEntity
/** 
 * List Message Comments
**/
export class MessageCommentEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=reactions" })
  reactions?: MessageCommentReactionEntity;
}
