import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BotLocaleExportSpecification
/** 
 * Provides the bot locale parameters required for exporting a bot locale.
**/
export class BotLocaleExportSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId: string;
}
