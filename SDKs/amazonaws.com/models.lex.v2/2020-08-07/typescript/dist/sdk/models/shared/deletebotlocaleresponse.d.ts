import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
export declare class DeleteBotLocaleResponse extends SpeakeasyBase {
    botId?: string;
    botLocaleStatus?: BotLocaleStatusEnum;
    botVersion?: string;
    localeId?: string;
}
