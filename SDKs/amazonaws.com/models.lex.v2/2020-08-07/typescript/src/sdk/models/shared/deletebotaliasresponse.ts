import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotAliasStatusEnum } from "./botaliasstatusenum";



export class DeleteBotAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=botAliasStatus" })
  botAliasStatus?: BotAliasStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;
}
