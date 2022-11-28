import { SpeakeasyBase } from "../../../internal/utils";
import { VoiceSettings } from "./voicesettings";
/**
 * Provides the bot locale parameters required for importing a bot locale.
**/
export declare class BotLocaleImportSpecification extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
    nluIntentConfidenceThreshold?: number;
    voiceSettings?: VoiceSettings;
}
