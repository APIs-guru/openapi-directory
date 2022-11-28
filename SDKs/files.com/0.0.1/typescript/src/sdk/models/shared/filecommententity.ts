import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileCommentReactionEntity } from "./filecommentreactionentity";



// FileCommentEntity
/** 
 * List File Comments by path
**/
export class FileCommentEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=reactions" })
  reactions?: FileCommentReactionEntity;
}
