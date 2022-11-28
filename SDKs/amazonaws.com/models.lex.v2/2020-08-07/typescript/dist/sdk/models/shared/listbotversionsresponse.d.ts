import { SpeakeasyBase } from "../../../internal/utils";
import { BotVersionSummary } from "./botversionsummary";
export declare class ListBotVersionsResponse extends SpeakeasyBase {
    botId?: string;
    botVersionSummaries?: BotVersionSummary[];
    nextToken?: string;
}
