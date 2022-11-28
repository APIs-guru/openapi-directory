import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleSummary } from "./botlocalesummary";
export declare class ListBotLocalesResponse extends SpeakeasyBase {
    botId?: string;
    botLocaleSummaries?: BotLocaleSummary[];
    botVersion?: string;
    nextToken?: string;
}
