import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotAliasSummary } from "./botaliassummary";


export class ListBotAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAliasSummaries", elemType: shared.BotAliasSummary })
  botAliasSummaries?: BotAliasSummary[];

  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
