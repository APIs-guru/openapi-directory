import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasSummary } from "./botaliassummary";
export declare class ListBotAliasesResponse extends SpeakeasyBase {
    botAliasSummaries?: BotAliasSummary[];
    botId?: string;
    nextToken?: string;
}
