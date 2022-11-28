import { SpeakeasyBase } from "../../../internal/utils";
import { DataPrivacy } from "./dataprivacy";
/**
 * Provides the bot parameters required for importing a bot.
**/
export declare class BotImportSpecification extends SpeakeasyBase {
    botName: string;
    botTags?: Map<string, string>;
    dataPrivacy: DataPrivacy;
    idleSessionTtlInSeconds?: number;
    roleArn: string;
    testBotAliasTags?: Map<string, string>;
}
