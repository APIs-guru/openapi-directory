import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MessageCommentReactionEntity
/** 
 * List Message Comment Reactions
**/
export class MessageCommentReactionEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=emoji" })
  emoji?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
