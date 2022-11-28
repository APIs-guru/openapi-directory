import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationAlert } from "./migrationalert";
import { MigrationStatusEnum } from "./migrationstatusenum";
import { MigrationStrategyEnum } from "./migrationstrategyenum";
import { LocaleEnum } from "./localeenum";
export declare class GetMigrationResponse extends SpeakeasyBase {
    alerts?: MigrationAlert[];
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
