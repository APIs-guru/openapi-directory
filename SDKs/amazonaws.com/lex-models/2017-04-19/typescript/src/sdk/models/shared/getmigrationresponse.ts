import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MigrationAlert } from "./migrationalert";
import { MigrationStatusEnum } from "./migrationstatusenum";
import { MigrationStrategyEnum } from "./migrationstrategyenum";
import { LocaleEnum } from "./localeenum";


export class GetMigrationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts", elemType: shared.MigrationAlert })
  alerts?: MigrationAlert[];

  @Metadata({ data: "json, name=migrationId" })
  migrationId?: string;

  @Metadata({ data: "json, name=migrationStatus" })
  migrationStatus?: MigrationStatusEnum;

  @Metadata({ data: "json, name=migrationStrategy" })
  migrationStrategy?: MigrationStrategyEnum;

  @Metadata({ data: "json, name=migrationTimestamp" })
  migrationTimestamp?: Date;

  @Metadata({ data: "json, name=v1BotLocale" })
  v1BotLocale?: LocaleEnum;

  @Metadata({ data: "json, name=v1BotName" })
  v1BotName?: string;

  @Metadata({ data: "json, name=v1BotVersion" })
  v1BotVersion?: string;

  @Metadata({ data: "json, name=v2BotId" })
  v2BotId?: string;

  @Metadata({ data: "json, name=v2BotRole" })
  v2BotRole?: string;
}
