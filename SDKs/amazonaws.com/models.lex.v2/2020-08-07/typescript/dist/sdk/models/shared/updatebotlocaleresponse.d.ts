import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
import { VoiceSettings } from "./voicesettings";
export declare class UpdateBotLocaleResponse extends SpeakeasyBase {
    botId?: string;
    botLocaleStatus?: BotLocaleStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    failureReasons?: string[];
    lastUpdatedDateTime?: Date;
    localeId?: string;
    localeName?: string;
    nluIntentConfidenceThreshold?: number;
    voiceSettings?: VoiceSettings;
}
