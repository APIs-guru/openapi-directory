import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VoiceSettings } from "./voicesettings";



// BotLocaleImportSpecification
/** 
 * Provides the bot locale parameters required for importing a bot locale.
**/
export class BotLocaleImportSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId: string;

  @SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=voiceSettings" })
  voiceSettings?: VoiceSettings;
}
