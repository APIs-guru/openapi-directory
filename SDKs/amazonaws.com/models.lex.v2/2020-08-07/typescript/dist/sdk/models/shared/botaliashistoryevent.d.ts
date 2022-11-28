import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes.
**/
export declare class BotAliasHistoryEvent extends SpeakeasyBase {
    botVersion?: string;
    endDate?: Date;
    startDate?: Date;
}
