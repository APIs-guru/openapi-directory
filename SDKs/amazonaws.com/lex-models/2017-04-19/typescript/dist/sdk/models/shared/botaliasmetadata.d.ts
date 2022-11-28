import { SpeakeasyBase } from "../../../internal/utils";
import { ConversationLogsResponse } from "./conversationlogsresponse";
/**
 * Provides information about a bot alias.
**/
export declare class BotAliasMetadata extends SpeakeasyBase {
    botName?: string;
    botVersion?: string;
    checksum?: string;
    conversationLogs?: ConversationLogsResponse;
    createdDate?: Date;
    description?: string;
    lastUpdatedDate?: Date;
    name?: string;
}
