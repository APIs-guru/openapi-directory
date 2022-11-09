import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageCommentReactionEntity } from "./messagecommentreactionentity";


// MessageCommentEntity
/** 
 * List Message Comments
**/
export class MessageCommentEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=reactions" })
  reactions?: MessageCommentReactionEntity;
}
