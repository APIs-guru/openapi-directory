import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TopicReplyMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class TopicReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=author_is_deleted" })
  authorIsDeleted?: boolean;

  @Metadata({ data: "json, name=author_path_alias" })
  authorPathAlias?: string;

  @Metadata({ data: "json, name=authorname" })
  authorname?: string;

  @Metadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=datecreate" })
  datecreate?: string;

  @Metadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @Metadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_pro" })
  isPro?: boolean;

  @Metadata({ data: "json, name=lastedit" })
  lastedit?: string;

  @Metadata({ data: "json, name=message" })
  message?: TopicReplyMessage;
}
