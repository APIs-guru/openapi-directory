import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotAliasMetadata } from "./botaliasmetadata";


export class GetBotAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BotAliases", elemType: shared.BotAliasMetadata })
  botAliases?: BotAliasMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
