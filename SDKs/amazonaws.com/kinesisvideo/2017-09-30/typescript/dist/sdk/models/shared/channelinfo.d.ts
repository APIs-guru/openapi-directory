import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { SingleMasterConfiguration } from "./singlemasterconfiguration";
/**
 * A structure that encapsulates a signaling channel's metadata and properties.
**/
export declare class ChannelInfo extends SpeakeasyBase {
    channelArn?: string;
    channelName?: string;
    channelStatus?: StatusEnum;
    channelType?: ChannelTypeEnum;
    creationTime?: Date;
    singleMasterConfiguration?: SingleMasterConfiguration;
    version?: string;
}
