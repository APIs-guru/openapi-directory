import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
/**
 * Summary information about bot aliases returned from the <a>ListBotAliases</a> operation.
**/
export declare class BotAliasSummary extends SpeakeasyBase {
    botAliasId?: string;
    botAliasName?: string;
    botAliasStatus?: BotAliasStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    lastUpdatedDateTime?: Date;
}
