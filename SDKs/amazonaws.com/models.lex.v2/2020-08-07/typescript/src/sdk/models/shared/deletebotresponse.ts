import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotStatusEnum } from "./botstatusenum";


export class DeleteBotResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;
}
