import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotStatusEnum } from "./botstatusenum";


export class DeleteBotVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;
}
