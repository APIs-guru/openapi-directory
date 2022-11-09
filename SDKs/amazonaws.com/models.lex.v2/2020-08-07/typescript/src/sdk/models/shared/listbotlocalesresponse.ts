import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotLocaleSummary } from "./botlocalesummary";


export class ListBotLocalesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botLocaleSummaries", elemType: shared.BotLocaleSummary })
  botLocaleSummaries?: BotLocaleSummary[];

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
