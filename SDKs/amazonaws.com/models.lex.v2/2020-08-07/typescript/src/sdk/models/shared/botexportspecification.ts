import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BotExportSpecification
/** 
 * Provides the identity of a the bot that was exported.
**/
export class BotExportSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion: string;
}
