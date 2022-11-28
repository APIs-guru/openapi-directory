import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotVersionSummary } from "./botversionsummary";



export class ListBotVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersionSummaries", elemType: BotVersionSummary })
  botVersionSummaries?: BotVersionSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
