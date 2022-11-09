import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { SingleMasterConfiguration } from "./singlemasterconfiguration";


// ChannelInfo
/** 
 * A structure that encapsulates a signaling channel's metadata and properties.
**/
export class ChannelInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelARN" })
  channelArn?: string;

  @Metadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @Metadata({ data: "json, name=ChannelStatus" })
  channelStatus?: StatusEnum;

  @Metadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=SingleMasterConfiguration" })
  singleMasterConfiguration?: SingleMasterConfiguration;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
