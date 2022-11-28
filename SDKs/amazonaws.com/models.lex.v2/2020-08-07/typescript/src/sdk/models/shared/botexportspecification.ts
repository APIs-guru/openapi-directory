import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BotExportSpecification
/** 
 * Provides the identity of a the bot that was exported.
**/
export class BotExportSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion: string;
}
