import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";



// BotVersionSummary
/** 
 * Summary information about a bot version returned by the <a>ListBotVersions</a> operation.
**/
export class BotVersionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName?: string;

  @SpeakeasyMetadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
