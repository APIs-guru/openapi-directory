import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCommentReactionEntity } from "./messagecommentreactionentity";
/**
 * List Message Comments
**/
export declare class MessageCommentEntity extends SpeakeasyBase {
    body?: string;
    id?: number;
    reactions?: MessageCommentReactionEntity;
}
