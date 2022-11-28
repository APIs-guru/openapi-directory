import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleHistoryEvent } from "./botlocalehistoryevent";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
import { VoiceSettings } from "./voicesettings";
export declare class DescribeBotLocaleResponse extends SpeakeasyBase {
    botId?: string;
    botLocaleHistoryEvents?: BotLocaleHistoryEvent[];
    botLocaleStatus?: BotLocaleStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    failureReasons?: string[];
    intentsCount?: number;
    lastBuildSubmittedDateTime?: Date;
    lastUpdatedDateTime?: Date;
    localeId?: string;
    localeName?: string;
    nluIntentConfidenceThreshold?: number;
    slotTypesCount?: number;
    voiceSettings?: VoiceSettings;
}
