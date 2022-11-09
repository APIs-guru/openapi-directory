import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotAliasHistoryEvent } from "./botaliashistoryevent";
import { BotAliasLocaleSettings } from "./botaliaslocalesettings";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
import { ConversationLogSettings } from "./conversationlogsettings";
import { SentimentAnalysisSettings } from "./sentimentanalysissettings";


export class DescribeBotAliasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAliasHistoryEvents", elemType: shared.BotAliasHistoryEvent })
  botAliasHistoryEvents?: BotAliasHistoryEvent[];

  @Metadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @Metadata({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings })
  botAliasLocaleSettings?: Map<string, BotAliasLocaleSettings>;

  @Metadata({ data: "json, name=botAliasName" })
  botAliasName?: string;

  @Metadata({ data: "json, name=botAliasStatus" })
  botAliasStatus?: BotAliasStatusEnum;

  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=conversationLogSettings" })
  conversationLogSettings?: ConversationLogSettings;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=sentimentAnalysisSettings" })
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
}
