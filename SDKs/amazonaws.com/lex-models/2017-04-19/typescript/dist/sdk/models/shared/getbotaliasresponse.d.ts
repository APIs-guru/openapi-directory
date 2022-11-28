import { SpeakeasyBase } from "../../../internal/utils";
import { ConversationLogsResponse } from "./conversationlogsresponse";
export declare class GetBotAliasResponse extends SpeakeasyBase {
    botName?: string;
    botVersion?: string;
    checksum?: string;
    conversationLogs?: ConversationLogsResponse;
    createdDate?: Date;
    description?: string;
    lastUpdatedDate?: Date;
    name?: string;
}
