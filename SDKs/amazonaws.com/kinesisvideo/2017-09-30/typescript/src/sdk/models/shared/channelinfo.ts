import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { SingleMasterConfiguration } from "./singlemasterconfiguration";



// ChannelInfo
/** 
 * A structure that encapsulates a signaling channel's metadata and properties.
**/
export class ChannelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelARN" })
  channelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelStatus" })
  channelStatus?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SingleMasterConfiguration" })
  singleMasterConfiguration?: SingleMasterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
