import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";



export class DeleteBotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;
}
