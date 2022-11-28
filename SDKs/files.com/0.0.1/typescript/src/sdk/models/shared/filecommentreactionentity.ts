import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileCommentReactionEntity
/** 
 * Create File Comment Reaction
**/
export class FileCommentReactionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emoji" })
  emoji?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
