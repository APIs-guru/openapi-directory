import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotChannelAssociation } from "./botchannelassociation";



export class GetBotChannelAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botChannelAssociations", elemType: BotChannelAssociation })
  botChannelAssociations?: BotChannelAssociation[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
