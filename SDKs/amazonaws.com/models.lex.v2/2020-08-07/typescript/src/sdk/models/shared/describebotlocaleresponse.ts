import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotLocaleHistoryEvent } from "./botlocalehistoryevent";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
import { VoiceSettings } from "./voicesettings";


export class DescribeBotLocaleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botLocaleHistoryEvents", elemType: shared.BotLocaleHistoryEvent })
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[];

  @Metadata({ data: "json, name=botLocaleStatus" })
  botLocaleStatus?: BotLocaleStatusEnum;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=failureReasons" })
  failureReasons?: string[];

  @Metadata({ data: "json, name=intentsCount" })
  intentsCount?: number;

  @Metadata({ data: "json, name=lastBuildSubmittedDateTime" })
  lastBuildSubmittedDateTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=localeName" })
  localeName?: string;

  @Metadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold?: number;

  @Metadata({ data: "json, name=slotTypesCount" })
  slotTypesCount?: number;

  @Metadata({ data: "json, name=voiceSettings" })
  voiceSettings?: VoiceSettings;
}
