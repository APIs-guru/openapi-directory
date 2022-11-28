import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotAliasSummary } from "./botaliassummary";



export class ListBotAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAliasSummaries", elemType: BotAliasSummary })
  botAliasSummaries?: BotAliasSummary[];

  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
