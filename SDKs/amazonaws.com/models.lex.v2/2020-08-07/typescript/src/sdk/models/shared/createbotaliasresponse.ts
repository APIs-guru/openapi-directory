import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotAliasLocaleSettings } from "./botaliaslocalesettings";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
import { ConversationLogSettings } from "./conversationlogsettings";
import { SentimentAnalysisSettings } from "./sentimentanalysissettings";



export class CreateBotAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=botAliasLocaleSettings", elemType: BotAliasLocaleSettings })
  botAliasLocaleSettings?: Map<string, BotAliasLocaleSettings>;

  @SpeakeasyMetadata({ data: "json, name=botAliasName" })
  botAliasName?: string;

  @SpeakeasyMetadata({ data: "json, name=botAliasStatus" })
  botAliasStatus?: BotAliasStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationLogSettings" })
  conversationLogSettings?: ConversationLogSettings;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisSettings" })
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
