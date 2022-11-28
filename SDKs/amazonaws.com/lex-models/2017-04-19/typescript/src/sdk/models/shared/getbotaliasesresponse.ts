import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotAliasMetadata } from "./botaliasmetadata";



export class GetBotAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BotAliases", elemType: BotAliasMetadata })
  botAliases?: BotAliasMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
