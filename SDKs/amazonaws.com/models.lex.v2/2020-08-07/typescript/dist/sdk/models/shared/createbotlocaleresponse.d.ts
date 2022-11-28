import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
import { VoiceSettings } from "./voicesettings";
export declare class CreateBotLocaleResponse extends SpeakeasyBase {
    botId?: string;
    botLocaleStatus?: BotLocaleStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    localeId?: string;
    localeName?: string;
    nluIntentConfidenceThreshold?: number;
    voiceSettings?: VoiceSettings;
}
