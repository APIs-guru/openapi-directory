import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPostActionsJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PostPostActionsJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=flag_topic" })
  flagTopic?: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=post_action_type_id" })
  postActionTypeId: number;
}


export class PostPostActionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPostActionsJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostPostActionsJsonRequestBody;
}


export class PostPostActionsJson200ApplicationJsonActionsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=acted" })
  acted?: boolean;

  @Metadata({ data: "json, name=can_undo" })
  canUndo?: boolean;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class PostPostActionsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions_summary", elemType: operations.PostPostActionsJson200ApplicationJsonActionsSummary })
  actionsSummary?: PostPostActionsJson200ApplicationJsonActionsSummary[];

  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=can_recover" })
  canRecover?: boolean;

  @Metadata({ data: "json, name=can_view_edit_history" })
  canViewEditHistory?: boolean;

  @Metadata({ data: "json, name=can_wiki" })
  canWiki?: boolean;

  @Metadata({ data: "json, name=cooked" })
  cooked?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=deleted_at" })
  deletedAt?: string;

  @Metadata({ data: "json, name=display_username" })
  displayUsername?: string;

  @Metadata({ data: "json, name=edit_reason" })
  editReason?: string;

  @Metadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @Metadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @Metadata({ data: "json, name=flair_name" })
  flairName?: string;

  @Metadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=incoming_link_count" })
  incomingLinkCount?: number;

  @Metadata({ data: "json, name=moderator" })
  moderator?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notice" })
  notice?: Map<string, any>;

  @Metadata({ data: "json, name=post_number" })
  postNumber?: number;

  @Metadata({ data: "json, name=post_type" })
  postType?: number;

  @Metadata({ data: "json, name=primary_group_name" })
  primaryGroupName?: string;

  @Metadata({ data: "json, name=quote_count" })
  quoteCount?: number;

  @Metadata({ data: "json, name=readers_count" })
  readersCount?: number;

  @Metadata({ data: "json, name=reads" })
  reads?: number;

  @Metadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @Metadata({ data: "json, name=reply_to_post_number" })
  replyToPostNumber?: string;

  @Metadata({ data: "json, name=reviewable_id" })
  reviewableId?: string;

  @Metadata({ data: "json, name=reviewable_score_count" })
  reviewableScoreCount?: number;

  @Metadata({ data: "json, name=reviewable_score_pending_count" })
  reviewableScorePendingCount?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=staff" })
  staff?: boolean;

  @Metadata({ data: "json, name=topic_id" })
  topicId?: number;

  @Metadata({ data: "json, name=topic_slug" })
  topicSlug?: string;

  @Metadata({ data: "json, name=trust_level" })
  trustLevel?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=user_deleted" })
  userDeleted?: boolean;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=user_title" })
  userTitle?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=wiki" })
  wiki?: boolean;

  @Metadata({ data: "json, name=yours" })
  yours?: boolean;
}


export class PostPostActionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPostActionsJson200ApplicationJsonObject?: PostPostActionsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
