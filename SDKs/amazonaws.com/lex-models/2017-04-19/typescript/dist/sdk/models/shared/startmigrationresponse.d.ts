import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationStrategyEnum } from "./migrationstrategyenum";
import { LocaleEnum } from "./localeenum";
export declare class StartMigrationResponse extends SpeakeasyBase {
    migrationId?: string;
    migrationStrategy?: MigrationStrategyEnum;
    migrationTimestamp?: Date;
    v1BotLocale?: LocaleEnum;
    v1BotName?: string;
    v1BotVersion?: string;
    v2BotId?: string;
    v2BotRole?: string;
}
