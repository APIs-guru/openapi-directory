import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationStrategyEnum } from "./migrationstrategyenum";
import { LocaleEnum } from "./localeenum";



export class StartMigrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migrationId" })
  migrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=migrationStrategy" })
  migrationStrategy?: MigrationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=migrationTimestamp" })
  migrationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=v1BotLocale" })
  v1BotLocale?: LocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=v1BotName" })
  v1BotName?: string;

  @SpeakeasyMetadata({ data: "json, name=v1BotVersion" })
  v1BotVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=v2BotId" })
  v2BotId?: string;

  @SpeakeasyMetadata({ data: "json, name=v2BotRole" })
  v2BotRole?: string;
}
