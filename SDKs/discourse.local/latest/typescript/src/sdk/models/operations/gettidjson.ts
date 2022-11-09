import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTIdJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class GetTIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTIdJsonPathParams;

  @Metadata()
  headers: GetTIdJsonHeaders;
}


export class GetTIdJson200ApplicationJsonActionsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_act" })
  canAct?: boolean;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class GetTIdJson200ApplicationJsonDetailsCreatedBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonDetailsLastPoster extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonDetailsParticipants extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @Metadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @Metadata({ data: "json, name=flair_name" })
  flairName?: string;

  @Metadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=post_count" })
  postCount?: number;

  @Metadata({ data: "json, name=primary_group_name" })
  primaryGroupName?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_convert_topic" })
  canConvertTopic?: boolean;

  @Metadata({ data: "json, name=can_create_post" })
  canCreatePost?: boolean;

  @Metadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=can_flag_topic" })
  canFlagTopic?: boolean;

  @Metadata({ data: "json, name=can_move_posts" })
  canMovePosts?: boolean;

  @Metadata({ data: "json, name=can_remove_allowed_users" })
  canRemoveAllowedUsers?: boolean;

  @Metadata({ data: "json, name=can_remove_self_id" })
  canRemoveSelfId?: number;

  @Metadata({ data: "json, name=can_reply_as_new_topic" })
  canReplyAsNewTopic?: boolean;

  @Metadata({ data: "json, name=can_review_topic" })
  canReviewTopic?: boolean;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: GetTIdJson200ApplicationJsonDetailsCreatedBy;

  @Metadata({ data: "json, name=last_poster" })
  lastPoster?: GetTIdJson200ApplicationJsonDetailsLastPoster;

  @Metadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @Metadata({ data: "json, name=participants", elemType: operations.GetTIdJson200ApplicationJsonDetailsParticipants })
  participants?: GetTIdJson200ApplicationJsonDetailsParticipants[];
}


export class GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_act" })
  canAct?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=clicks" })
  clicks?: number;

  @Metadata({ data: "json, name=internal" })
  internal?: boolean;

  @Metadata({ data: "json, name=reflection" })
  reflection?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetTIdJson200ApplicationJsonPostStreamPosts extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions_summary", elemType: operations.GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary })
  actionsSummary?: GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary[];

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

  @Metadata({ data: "json, name=link_counts", elemType: operations.GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts })
  linkCounts?: GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts[];

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

  @Metadata({ data: "json, name=read" })
  read?: boolean;

  @Metadata({ data: "json, name=readers_count" })
  readersCount?: number;

  @Metadata({ data: "json, name=reads" })
  reads?: number;

  @Metadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @Metadata({ data: "json, name=reply_to_post_number" })
  replyToPostNumber?: string;

  @Metadata({ data: "json, name=reviewable_id" })
  reviewableId?: number;

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


export class GetTIdJson200ApplicationJsonPostStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=posts", elemType: operations.GetTIdJson200ApplicationJsonPostStreamPosts })
  posts?: GetTIdJson200ApplicationJsonPostStreamPosts[];

  @Metadata({ data: "json, name=stream" })
  stream?: any[];
}


export class GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonSuggestedTopicsPosters extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extras" })
  extras?: string;

  @Metadata({ data: "json, name=user" })
  user?: GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser;
}


export class GetTIdJson200ApplicationJsonSuggestedTopics extends SpeakeasyBase {
  @Metadata({ data: "json, name=archetype" })
  archetype?: string;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=bookmarked" })
  bookmarked?: boolean;

  @Metadata({ data: "json, name=bumped" })
  bumped?: boolean;

  @Metadata({ data: "json, name=bumped_at" })
  bumpedAt?: string;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: number;

  @Metadata({ data: "json, name=closed" })
  closed?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=fancy_title" })
  fancyTitle?: string;

  @Metadata({ data: "json, name=featured_link" })
  featuredLink?: string;

  @Metadata({ data: "json, name=highest_post_number" })
  highestPostNumber?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=last_posted_at" })
  lastPostedAt?: string;

  @Metadata({ data: "json, name=last_read_post_number" })
  lastReadPostNumber?: number;

  @Metadata({ data: "json, name=like_count" })
  likeCount?: number;

  @Metadata({ data: "json, name=liked" })
  liked?: boolean;

  @Metadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @Metadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @Metadata({ data: "json, name=posters", elemType: operations.GetTIdJson200ApplicationJsonSuggestedTopicsPosters })
  posters?: GetTIdJson200ApplicationJsonSuggestedTopicsPosters[];

  @Metadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @Metadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=unpinned" })
  unpinned?: boolean;

  @Metadata({ data: "json, name=unread_posts" })
  unreadPosts?: number;

  @Metadata({ data: "json, name=unseen" })
  unseen?: boolean;

  @Metadata({ data: "json, name=views" })
  views?: number;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class GetTIdJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions_summary", elemType: operations.GetTIdJson200ApplicationJsonActionsSummary })
  actionsSummary?: GetTIdJson200ApplicationJsonActionsSummary[];

  @Metadata({ data: "json, name=archetype" })
  archetype?: string;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=bookmarked" })
  bookmarked?: boolean;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: number;

  @Metadata({ data: "json, name=chunk_size" })
  chunkSize?: number;

  @Metadata({ data: "json, name=closed" })
  closed?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=current_post_number" })
  currentPostNumber?: number;

  @Metadata({ data: "json, name=deleted_at" })
  deletedAt?: string;

  @Metadata({ data: "json, name=deleted_by" })
  deletedBy?: string;

  @Metadata({ data: "json, name=details" })
  details?: GetTIdJson200ApplicationJsonDetails;

  @Metadata({ data: "json, name=draft" })
  draft?: string;

  @Metadata({ data: "json, name=draft_key" })
  draftKey?: string;

  @Metadata({ data: "json, name=draft_sequence" })
  draftSequence?: number;

  @Metadata({ data: "json, name=fancy_title" })
  fancyTitle?: string;

  @Metadata({ data: "json, name=featured_link" })
  featuredLink?: string;

  @Metadata({ data: "json, name=has_deleted" })
  hasDeleted?: boolean;

  @Metadata({ data: "json, name=has_summary" })
  hasSummary?: boolean;

  @Metadata({ data: "json, name=highest_post_number" })
  highestPostNumber?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=last_posted_at" })
  lastPostedAt?: string;

  @Metadata({ data: "json, name=like_count" })
  likeCount?: number;

  @Metadata({ data: "json, name=message_bus_last_id" })
  messageBusLastId?: number;

  @Metadata({ data: "json, name=participant_count" })
  participantCount?: number;

  @Metadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @Metadata({ data: "json, name=pinned_at" })
  pinnedAt?: string;

  @Metadata({ data: "json, name=pinned_globally" })
  pinnedGlobally?: boolean;

  @Metadata({ data: "json, name=pinned_until" })
  pinnedUntil?: string;

  @Metadata({ data: "json, name=post_stream" })
  postStream?: GetTIdJson200ApplicationJsonPostStream;

  @Metadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @Metadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @Metadata({ data: "json, name=show_read_indicator" })
  showReadIndicator?: boolean;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=suggested_topics", elemType: operations.GetTIdJson200ApplicationJsonSuggestedTopics })
  suggestedTopics?: GetTIdJson200ApplicationJsonSuggestedTopics[];

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: string;

  @Metadata({ data: "json, name=timeline_lookup" })
  timelineLookup?: any[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=topic_timer" })
  topicTimer?: string;

  @Metadata({ data: "json, name=unpinned" })
  unpinned?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=views" })
  views?: number;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;

  @Metadata({ data: "json, name=word_count" })
  wordCount?: number;
}


export class GetTIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTIdJson200ApplicationJsonObject?: GetTIdJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
