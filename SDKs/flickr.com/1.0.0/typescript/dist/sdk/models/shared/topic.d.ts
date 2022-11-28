import { SpeakeasyBase } from "../../../internal/utils";
export declare class TopicMessage extends SpeakeasyBase {
    content?: string;
}
export declare class Topic extends SpeakeasyBase {
    author?: string;
    authorIsDeleted?: boolean;
    authorPathAlias?: string;
    authorname?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    canReply?: boolean;
    countReplies?: number;
    datecreate?: string;
    datelastpost?: string;
    iconfarm?: string;
    iconserver?: string;
    id?: string;
    isLocked?: boolean;
    isPro?: boolean;
    isSticky?: boolean;
    lastReply?: string;
    lastedit?: string;
    message?: TopicMessage;
    role?: string;
    subject?: string;
}
