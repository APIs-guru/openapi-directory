import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotSummary } from "./botsummary";



export class ListBotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botSummaries", elemType: BotSummary })
  botSummaries?: BotSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
