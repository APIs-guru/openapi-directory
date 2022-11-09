import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotVersionSummary } from "./botversionsummary";


export class ListBotVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersionSummaries", elemType: shared.BotVersionSummary })
  botVersionSummaries?: BotVersionSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
