import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCommentEntity } from "./messagecommententity";
/**
 * List Messages
**/
export declare class MessageEntity extends SpeakeasyBase {
    body?: string;
    comments?: MessageCommentEntity;
    id?: number;
    subject?: string;
}
