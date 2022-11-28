import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConversationLogsResponse } from "./conversationlogsresponse";
import { Tag } from "./tag";



export class PutBotAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationLogs" })
  conversationLogs?: ConversationLogsResponse;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
