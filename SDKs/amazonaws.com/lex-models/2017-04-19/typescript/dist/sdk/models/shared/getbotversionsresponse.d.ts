import { SpeakeasyBase } from "../../../internal/utils";
import { BotMetadata } from "./botmetadata";
export declare class GetBotVersionsResponse extends SpeakeasyBase {
    bots?: BotMetadata[];
    nextToken?: string;
}
