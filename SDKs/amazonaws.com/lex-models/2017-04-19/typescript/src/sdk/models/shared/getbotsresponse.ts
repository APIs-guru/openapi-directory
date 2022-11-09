import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotMetadata } from "./botmetadata";


export class GetBotsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bots", elemType: shared.BotMetadata })
  bots?: BotMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
