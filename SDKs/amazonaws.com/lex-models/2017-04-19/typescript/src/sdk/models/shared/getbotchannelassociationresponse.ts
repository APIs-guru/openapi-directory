import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelTypeEnum } from "./channeltypeenum";



export class GetBotChannelAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAlias" })
  botAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=botConfiguration" })
  botConfiguration?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChannelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChannelTypeEnum;
}
