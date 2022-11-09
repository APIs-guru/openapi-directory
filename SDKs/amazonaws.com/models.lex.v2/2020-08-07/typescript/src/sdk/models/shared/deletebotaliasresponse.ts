import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotAliasStatusEnum } from "./botaliasstatusenum";


export class DeleteBotAliasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @Metadata({ data: "json, name=botAliasStatus" })
  botAliasStatus?: BotAliasStatusEnum;

  @Metadata({ data: "json, name=botId" })
  botId?: string;
}
