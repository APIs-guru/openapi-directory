import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
/**
 * Summary information about a bot version returned by the <a>ListBotVersions</a> operation.
**/
export declare class BotVersionSummary extends SpeakeasyBase {
    botName?: string;
    botStatus?: BotStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
}
