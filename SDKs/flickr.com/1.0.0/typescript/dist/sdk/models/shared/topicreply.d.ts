import { SpeakeasyBase } from "../../../internal/utils";
export declare class TopicReplyMessage extends SpeakeasyBase {
    content?: string;
}
export declare class TopicReply extends SpeakeasyBase {
    author?: string;
    authorIsDeleted?: boolean;
    authorPathAlias?: string;
    authorname?: string;
    canDelete?: boolean;
    canEdit?: boolean;
    datecreate?: string;
    iconfarm?: string;
    iconserver?: string;
    id?: string;
    isPro?: boolean;
    lastedit?: string;
    message?: TopicReplyMessage;
}
