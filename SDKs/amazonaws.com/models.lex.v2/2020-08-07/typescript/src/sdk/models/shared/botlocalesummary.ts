import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";



// BotLocaleSummary
/** 
 * Summary information about bot locales returned by the <a>ListBotLocales</a> operation.
**/
export class BotLocaleSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botLocaleStatus" })
  botLocaleStatus?: BotLocaleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastBuildSubmittedDateTime" })
  lastBuildSubmittedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=localeName" })
  localeName?: string;
}
