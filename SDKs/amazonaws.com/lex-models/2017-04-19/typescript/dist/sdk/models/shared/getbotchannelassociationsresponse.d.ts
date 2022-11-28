import { SpeakeasyBase } from "../../../internal/utils";
import { BotChannelAssociation } from "./botchannelassociation";
export declare class GetBotChannelAssociationsResponse extends SpeakeasyBase {
    botChannelAssociations?: BotChannelAssociation[];
    nextToken?: string;
}
