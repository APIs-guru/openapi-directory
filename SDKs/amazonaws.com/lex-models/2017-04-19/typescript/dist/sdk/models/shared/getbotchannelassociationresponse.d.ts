import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelTypeEnum } from "./channeltypeenum";
export declare class GetBotChannelAssociationResponse extends SpeakeasyBase {
    botAlias?: string;
    botConfiguration?: Map<string, string>;
    botName?: string;
    createdDate?: Date;
    description?: string;
    failureReason?: string;
    name?: string;
    status?: ChannelStatusEnum;
    type?: ChannelTypeEnum;
}
