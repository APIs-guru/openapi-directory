import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TopicReplyMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class TopicReply extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=datecreate" })
  datecreate?: string;

  @SpeakeasyMetadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @SpeakeasyMetadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_pro" })
  isPro?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastedit" })
  lastedit?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: TopicReplyMessage;
}
