import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasLocaleSettings } from "./botaliaslocalesettings";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
import { ConversationLogSettings } from "./conversationlogsettings";
import { SentimentAnalysisSettings } from "./sentimentanalysissettings";
export declare class CreateBotAliasResponse extends SpeakeasyBase {
    botAliasId?: string;
    botAliasLocaleSettings?: Map<string, BotAliasLocaleSettings>;
    botAliasName?: string;
    botAliasStatus?: BotAliasStatusEnum;
    botId?: string;
    botVersion?: string;
    conversationLogSettings?: ConversationLogSettings;
    creationDateTime?: Date;
    description?: string;
    sentimentAnalysisSettings?: SentimentAnalysisSettings;
    tags?: Map<string, string>;
}
