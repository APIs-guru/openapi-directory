import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BotLocaleExportSpecification
/** 
 * Provides the bot locale parameters required for exporting a bot locale.
**/
export class BotLocaleExportSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion: string;

  @Metadata({ data: "json, name=localeId" })
  localeId: string;
}
