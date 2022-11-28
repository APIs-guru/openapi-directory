import { SpeakeasyBase } from "../../../internal/utils";
import { ConversationLogsResponse } from "./conversationlogsresponse";
import { Tag } from "./tag";
export declare class PutBotAliasResponse extends SpeakeasyBase {
    botName?: string;
    botVersion?: string;
    checksum?: string;
    conversationLogs?: ConversationLogsResponse;
    createdDate?: Date;
    description?: string;
    lastUpdatedDate?: Date;
    name?: string;
    tags?: Tag[];
}
