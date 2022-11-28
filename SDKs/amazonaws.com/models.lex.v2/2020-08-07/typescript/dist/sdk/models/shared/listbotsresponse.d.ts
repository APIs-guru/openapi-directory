import { SpeakeasyBase } from "../../../internal/utils";
import { BotSummary } from "./botsummary";
export declare class ListBotsResponse extends SpeakeasyBase {
    botSummaries?: BotSummary[];
    nextToken?: string;
}
