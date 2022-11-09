import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotSummary } from "./botsummary";


export class ListBotsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botSummaries", elemType: shared.BotSummary })
  botSummaries?: BotSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
