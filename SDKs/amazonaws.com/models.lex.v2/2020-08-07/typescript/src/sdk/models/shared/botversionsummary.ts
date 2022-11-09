import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotStatusEnum } from "./botstatusenum";


// BotVersionSummary
/** 
 * Summary information about a bot version returned by the <a>ListBotVersions</a> operation.
**/
export class BotVersionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=botName" })
  botName?: string;

  @Metadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
