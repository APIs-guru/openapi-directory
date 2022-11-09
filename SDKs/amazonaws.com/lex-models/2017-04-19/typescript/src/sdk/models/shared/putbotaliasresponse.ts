import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConversationLogsResponse } from "./conversationlogsresponse";
import { Tag } from "./tag";


export class PutBotAliasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botName" })
  botName?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=conversationLogs" })
  conversationLogs?: ConversationLogsResponse;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
