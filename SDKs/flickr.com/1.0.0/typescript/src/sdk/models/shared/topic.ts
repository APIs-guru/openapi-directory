import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TopicMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class Topic extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=can_reply" })
  canReply?: boolean;

  @Metadata({ data: "json, name=count_replies" })
  countReplies?: number;

  @Metadata({ data: "json, name=datecreate" })
  datecreate?: string;

  @Metadata({ data: "json, name=datelastpost" })
  datelastpost?: string;

  @Metadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @Metadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_locked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=is_pro" })
  isPro?: boolean;

  @Metadata({ data: "json, name=is_sticky" })
  isSticky?: boolean;

  @Metadata({ data: "json, name=last_reply" })
  lastReply?: string;

  @Metadata({ data: "json, name=lastedit" })
  lastedit?: string;

  @Metadata({ data: "json, name=message" })
  message?: TopicMessage;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
