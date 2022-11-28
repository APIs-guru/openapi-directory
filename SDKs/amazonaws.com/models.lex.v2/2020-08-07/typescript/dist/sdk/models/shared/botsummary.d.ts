import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
/**
 * Summary information about a bot returned by the <a>ListBots</a> operation.
**/
export declare class BotSummary extends SpeakeasyBase {
    botId?: string;
    botName?: string;
    botStatus?: BotStatusEnum;
    description?: string;
    lastUpdatedDateTime?: Date;
    latestBotVersion?: string;
}
