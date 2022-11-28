import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationStatusEnum } from "./migrationstatusenum";
import { MigrationStrategyEnum } from "./migrationstrategyenum";
import { LocaleEnum } from "./localeenum";
/**
 * Provides information about migrating a bot from Amazon Lex V1 to Amazon Lex V2.
**/
export declare class MigrationSummary extends SpeakeasyBase {
    migrationId?: string;
    migrationStatus?: MigrationStatusEnum;
    migrationStrategy?: MigrationStrategyEnum;
    migrationTimestamp?: Date;
    v1BotLocale?: LocaleEnum;
    v1BotName?: string;
    v1BotVersion?: string;
    v2BotId?: string;
    v2BotRole?: string;
}
