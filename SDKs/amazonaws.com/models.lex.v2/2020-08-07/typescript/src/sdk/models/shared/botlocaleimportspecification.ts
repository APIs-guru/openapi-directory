import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VoiceSettings } from "./voicesettings";


// BotLocaleImportSpecification
/** 
 * Provides the bot locale parameters required for importing a bot locale.
**/
export class BotLocaleImportSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion: string;

  @Metadata({ data: "json, name=localeId" })
  localeId: string;

  @Metadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold?: number;

  @Metadata({ data: "json, name=voiceSettings" })
  voiceSettings?: VoiceSettings;
}
