import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelTypeEnum } from "./channeltypeenum";


// BotChannelAssociation
/** 
 * Represents an association between an Amazon Lex bot and an external messaging platform.
**/
export class BotChannelAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAlias" })
  botAlias?: string;

  @Metadata({ data: "json, name=botConfiguration" })
  botConfiguration?: Map<string, string>;

  @Metadata({ data: "json, name=botName" })
  botName?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: ChannelStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: ChannelTypeEnum;
}
