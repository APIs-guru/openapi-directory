import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleHistoryEvent } from "./botlocalehistoryevent";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
import { VoiceSettings } from "./voicesettings";



export class DescribeBotLocaleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botLocaleHistoryEvents", elemType: BotLocaleHistoryEvent })
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[];

  @SpeakeasyMetadata({ data: "json, name=botLocaleStatus" })
  botLocaleStatus?: BotLocaleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReasons" })
  failureReasons?: string[];

  @SpeakeasyMetadata({ data: "json, name=intentsCount" })
  intentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=lastBuildSubmittedDateTime" })
  lastBuildSubmittedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=localeName" })
  localeName?: string;

  @SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=slotTypesCount" })
  slotTypesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=voiceSettings" })
  voiceSettings?: VoiceSettings;
}
