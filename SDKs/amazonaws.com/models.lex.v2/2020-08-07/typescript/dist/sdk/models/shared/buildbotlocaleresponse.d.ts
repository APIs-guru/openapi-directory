import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
export declare class BuildBotLocaleResponse extends SpeakeasyBase {
    botId?: string;
    botLocaleStatus?: BotLocaleStatusEnum;
    botVersion?: string;
    lastBuildSubmittedDateTime?: Date;
    localeId?: string;
}
