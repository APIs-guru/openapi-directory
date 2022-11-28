import { SpeakeasyBase } from "../../../internal/utils";
import { FileCommentReactionEntity } from "./filecommentreactionentity";
/**
 * List File Comments by path
**/
export declare class FileCommentEntity extends SpeakeasyBase {
    body?: string;
    id?: number;
    reactions?: FileCommentReactionEntity;
}
