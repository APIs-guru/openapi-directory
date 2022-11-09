import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileCommentReactionEntity
/** 
 * Create File Comment Reaction
**/
export class FileCommentReactionEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=emoji" })
  emoji?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
