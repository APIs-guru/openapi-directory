import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasMetadata } from "./botaliasmetadata";
export declare class GetBotAliasesResponse extends SpeakeasyBase {
    botAliases?: BotAliasMetadata[];
    nextToken?: string;
}
