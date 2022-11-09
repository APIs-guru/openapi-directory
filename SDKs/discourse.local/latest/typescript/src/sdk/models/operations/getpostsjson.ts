import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPostsJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class GetPostsJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPostsJsonHeaders;
}


export class GetPostsJson200ApplicationJsonLatestPostsActionsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_act" })
  canAct?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class GetPostsJson200ApplicationJsonLatestPosts extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions_summary", elemType: operations.GetPostsJson200ApplicationJsonLatestPostsActionsSummary })
  actionsSummary?: GetPostsJson200ApplicationJsonLatestPostsActionsSummary[];

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

  @Metadata({ data: "json, name=category_id" })
  categoryId?: number;

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

  @Metadata({ data: "json, name=post_number" })
  postNumber?: number;

  @Metadata({ data: "json, name=post_type" })
  postType?: number;

  @Metadata({ data: "json, name=primary_group_name" })
  primaryGroupName?: string;

  @Metadata({ data: "json, name=quote_count" })
  quoteCount?: number;

  @Metadata({ data: "json, name=raw" })
  raw?: string;

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

  @Metadata({ data: "json, name=topic_html_title" })
  topicHtmlTitle?: string;

  @Metadata({ data: "json, name=topic_id" })
  topicId?: number;

  @Metadata({ data: "json, name=topic_slug" })
  topicSlug?: string;

  @Metadata({ data: "json, name=topic_title" })
  topicTitle?: string;

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


export class GetPostsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=latest_posts", elemType: operations.GetPostsJson200ApplicationJsonLatestPosts })
  latestPosts?: GetPostsJson200ApplicationJsonLatestPosts[];
}


export class GetPostsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPostsJson200ApplicationJsonObject?: GetPostsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
