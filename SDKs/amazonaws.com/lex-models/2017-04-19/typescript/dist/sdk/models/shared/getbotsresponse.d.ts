import { SpeakeasyBase } from "../../../internal/utils";
import { BotMetadata } from "./botmetadata";
export declare class GetBotsResponse extends SpeakeasyBase {
    bots?: BotMetadata[];
    nextToken?: string;
}
