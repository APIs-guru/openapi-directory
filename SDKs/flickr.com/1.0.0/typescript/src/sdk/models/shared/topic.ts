import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TopicMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=author_is_deleted" })
  authorIsDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=author_path_alias" })
  authorPathAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=authorname" })
  authorname?: string;

  @SpeakeasyMetadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_reply" })
  canReply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=count_replies" })
  countReplies?: number;

  @SpeakeasyMetadata({ data: "json, name=datecreate" })
  datecreate?: string;

  @SpeakeasyMetadata({ data: "json, name=datelastpost" })
  datelastpost?: string;

  @SpeakeasyMetadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @SpeakeasyMetadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_locked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_pro" })
  isPro?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_sticky" })
  isSticky?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_reply" })
  lastReply?: string;

  @SpeakeasyMetadata({ data: "json, name=lastedit" })
  lastedit?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: TopicMessage;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
