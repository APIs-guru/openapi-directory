import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataPrivacy } from "./dataprivacy";


// BotImportSpecification
/** 
 * Provides the bot parameters required for importing a bot.
**/
export class BotImportSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=botName" })
  botName: string;

  @Metadata({ data: "json, name=botTags" })
  botTags?: Map<string, string>;

  @Metadata({ data: "json, name=dataPrivacy" })
  dataPrivacy: DataPrivacy;

  @Metadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=testBotAliasTags" })
  testBotAliasTags?: Map<string, string>;
}
