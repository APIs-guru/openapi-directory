import { SpeakeasyBase } from "../../../internal/utils";
import { WorldSummary } from "./worldsummary";
export declare class ListWorldsResponse extends SpeakeasyBase {
    nextToken?: string;
    worldSummaries?: WorldSummary[];
}
