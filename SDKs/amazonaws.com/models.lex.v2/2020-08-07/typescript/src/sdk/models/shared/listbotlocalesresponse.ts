import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleSummary } from "./botlocalesummary";



export class ListBotLocalesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botLocaleSummaries", elemType: BotLocaleSummary })
  botLocaleSummaries?: BotLocaleSummary[];

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
