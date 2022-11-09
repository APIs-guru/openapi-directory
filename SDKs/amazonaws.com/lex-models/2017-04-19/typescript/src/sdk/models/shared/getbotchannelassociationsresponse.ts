import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotChannelAssociation } from "./botchannelassociation";


export class GetBotChannelAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botChannelAssociations", elemType: shared.BotChannelAssociation })
  botChannelAssociations?: BotChannelAssociation[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
