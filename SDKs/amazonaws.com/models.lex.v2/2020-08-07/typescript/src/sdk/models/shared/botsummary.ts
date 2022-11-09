import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotStatusEnum } from "./botstatusenum";


// BotSummary
/** 
 * Summary information about a bot returned by the <a>ListBots</a> operation.
**/
export class BotSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botName" })
  botName?: string;

  @Metadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=latestBotVersion" })
  latestBotVersion?: string;
}
