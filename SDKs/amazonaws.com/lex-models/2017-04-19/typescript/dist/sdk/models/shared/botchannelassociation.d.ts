import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelTypeEnum } from "./channeltypeenum";
/**
 * Represents an association between an Amazon Lex bot and an external messaging platform.
**/
export declare class BotChannelAssociation extends SpeakeasyBase {
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
