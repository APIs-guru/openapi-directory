import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotMetadata } from "./botmetadata";



export class GetBotVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bots", elemType: BotMetadata })
  bots?: BotMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
