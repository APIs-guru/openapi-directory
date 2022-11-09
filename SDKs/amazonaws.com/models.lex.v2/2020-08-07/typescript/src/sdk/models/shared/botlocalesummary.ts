import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";


// BotLocaleSummary
/** 
 * Summary information about bot locales returned by the <a>ListBotLocales</a> operation.
**/
export class BotLocaleSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=botLocaleStatus" })
  botLocaleStatus?: BotLocaleStatusEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastBuildSubmittedDateTime" })
  lastBuildSubmittedDateTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=localeName" })
  localeName?: string;
}
