import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";


export class DeleteBotLocaleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botLocaleStatus" })
  botLocaleStatus?: BotLocaleStatusEnum;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;
}
