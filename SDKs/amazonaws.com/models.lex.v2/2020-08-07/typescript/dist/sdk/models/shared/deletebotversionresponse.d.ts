import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
export declare class DeleteBotVersionResponse extends SpeakeasyBase {
    botId?: string;
    botStatus?: BotStatusEnum;
    botVersion?: string;
}
