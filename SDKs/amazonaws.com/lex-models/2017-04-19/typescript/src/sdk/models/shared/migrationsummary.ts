import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationStatusEnum } from "./migrationstatusenum";
import { MigrationStrategyEnum } from "./migrationstrategyenum";
import { LocaleEnum } from "./localeenum";



// MigrationSummary
/** 
 * Provides information about migrating a bot from Amazon Lex V1 to Amazon Lex V2.
**/
export class MigrationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migrationId" })
  migrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=migrationStatus" })
  migrationStatus?: MigrationStatusEnum;

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
