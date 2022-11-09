import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileCommentReactionEntity } from "./filecommentreactionentity";


// FileCommentEntity
/** 
 * List File Comments by path
**/
export class FileCommentEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=reactions" })
  reactions?: FileCommentReactionEntity;
}
