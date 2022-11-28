import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MessageCommentReactionEntity
/** 
 * List Message Comment Reactions
**/
export class MessageCommentReactionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emoji" })
  emoji?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
