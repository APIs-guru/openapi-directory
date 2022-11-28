import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";



// BotSummary
/** 
 * Summary information about a bot returned by the <a>ListBots</a> operation.
**/
export class BotSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName?: string;

  @SpeakeasyMetadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestBotVersion" })
  latestBotVersion?: string;
}
