import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTIdJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class GetTIdJson200ApplicationJsonActionsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_act" })
  canAct?: boolean;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class GetTIdJson200ApplicationJsonDetailsCreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonDetailsLastPoster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonDetailsParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_name" })
  flairName?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=post_count" })
  postCount?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_group_name" })
  primaryGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_convert_topic" })
  canConvertTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_create_post" })
  canCreatePost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_flag_topic" })
  canFlagTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_move_posts" })
  canMovePosts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_remove_allowed_users" })
  canRemoveAllowedUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_remove_self_id" })
  canRemoveSelfId?: number;

  @SpeakeasyMetadata({ data: "json, name=can_reply_as_new_topic" })
  canReplyAsNewTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_review_topic" })
  canReviewTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: GetTIdJson200ApplicationJsonDetailsCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=last_poster" })
  lastPoster?: GetTIdJson200ApplicationJsonDetailsLastPoster;

  @SpeakeasyMetadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: GetTIdJson200ApplicationJsonDetailsParticipants })
  participants?: GetTIdJson200ApplicationJsonDetailsParticipants[];
}


export class GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_act" })
  canAct?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clicks" })
  clicks?: number;

  @SpeakeasyMetadata({ data: "json, name=internal" })
  internal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reflection" })
  reflection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetTIdJson200ApplicationJsonPostStreamPosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary })
  actionsSummary?: GetTIdJson200ApplicationJsonPostStreamPostsActionsSummary[];

  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_recover" })
  canRecover?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_view_edit_history" })
  canViewEditHistory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_wiki" })
  canWiki?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cooked" })
  cooked?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted_at" })
  deletedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=display_username" })
  displayUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=edit_reason" })
  editReason?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_name" })
  flairName?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=incoming_link_count" })
  incomingLinkCount?: number;

  @SpeakeasyMetadata({ data: "json, name=link_counts", elemType: GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts })
  linkCounts?: GetTIdJson200ApplicationJsonPostStreamPostsLinkCounts[];

  @SpeakeasyMetadata({ data: "json, name=moderator" })
  moderator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=post_number" })
  postNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=post_type" })
  postType?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_group_name" })
  primaryGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=quote_count" })
  quoteCount?: number;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readers_count" })
  readersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reads" })
  reads?: number;

  @SpeakeasyMetadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reply_to_post_number" })
  replyToPostNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewable_id" })
  reviewableId?: number;

  @SpeakeasyMetadata({ data: "json, name=reviewable_score_count" })
  reviewableScoreCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reviewable_score_pending_count" })
  reviewableScorePendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=staff" })
  staff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topic_id" })
  topicId?: number;

  @SpeakeasyMetadata({ data: "json, name=topic_slug" })
  topicSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=trust_level" })
  trustLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=user_deleted" })
  userDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=user_title" })
  userTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=wiki" })
  wiki?: boolean;

  @SpeakeasyMetadata({ data: "json, name=yours" })
  yours?: boolean;
}


export class GetTIdJson200ApplicationJsonPostStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=posts", elemType: GetTIdJson200ApplicationJsonPostStreamPosts })
  posts?: GetTIdJson200ApplicationJsonPostStreamPosts[];

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: any[];
}


export class GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetTIdJson200ApplicationJsonSuggestedTopicsPosters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: GetTIdJson200ApplicationJsonSuggestedTopicsPostersUser;
}


export class GetTIdJson200ApplicationJsonSuggestedTopics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archetype" })
  archetype?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bookmarked" })
  bookmarked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bumped" })
  bumped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bumped_at" })
  bumpedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=fancy_title" })
  fancyTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=featured_link" })
  featuredLink?: string;

  @SpeakeasyMetadata({ data: "json, name=highest_post_number" })
  highestPostNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=last_posted_at" })
  lastPostedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=last_read_post_number" })
  lastReadPostNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=like_count" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=liked" })
  liked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=posters", elemType: GetTIdJson200ApplicationJsonSuggestedTopicsPosters })
  posters?: GetTIdJson200ApplicationJsonSuggestedTopicsPosters[];

  @SpeakeasyMetadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=unpinned" })
  unpinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unread_posts" })
  unreadPosts?: number;

  @SpeakeasyMetadata({ data: "json, name=unseen" })
  unseen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: number;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class GetTIdJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: GetTIdJson200ApplicationJsonActionsSummary })
  actionsSummary?: GetTIdJson200ApplicationJsonActionsSummary[];

  @SpeakeasyMetadata({ data: "json, name=archetype" })
  archetype?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bookmarked" })
  bookmarked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=chunk_size" })
  chunkSize?: number;

  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=current_post_number" })
  currentPostNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=deleted_at" })
  deletedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted_by" })
  deletedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetTIdJson200ApplicationJsonDetails;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: string;

  @SpeakeasyMetadata({ data: "json, name=draft_key" })
  draftKey?: string;

  @SpeakeasyMetadata({ data: "json, name=draft_sequence" })
  draftSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=fancy_title" })
  fancyTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=featured_link" })
  featuredLink?: string;

  @SpeakeasyMetadata({ data: "json, name=has_deleted" })
  hasDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_summary" })
  hasSummary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=highest_post_number" })
  highestPostNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=last_posted_at" })
  lastPostedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=like_count" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=message_bus_last_id" })
  messageBusLastId?: number;

  @SpeakeasyMetadata({ data: "json, name=participant_count" })
  participantCount?: number;

  @SpeakeasyMetadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pinned_at" })
  pinnedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=pinned_globally" })
  pinnedGlobally?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pinned_until" })
  pinnedUntil?: string;

  @SpeakeasyMetadata({ data: "json, name=post_stream" })
  postStream?: GetTIdJson200ApplicationJsonPostStream;

  @SpeakeasyMetadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=show_read_indicator" })
  showReadIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=suggested_topics", elemType: GetTIdJson200ApplicationJsonSuggestedTopics })
  suggestedTopics?: GetTIdJson200ApplicationJsonSuggestedTopics[];

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: string;

  @SpeakeasyMetadata({ data: "json, name=timeline_lookup" })
  timelineLookup?: any[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=topic_timer" })
  topicTimer?: string;

  @SpeakeasyMetadata({ data: "json, name=unpinned" })
  unpinned?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: number;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=word_count" })
  wordCount?: number;
}


export class GetTIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTIdJsonPathParams;

  @SpeakeasyMetadata()
  headers: GetTIdJsonHeaders;
}


export class GetTIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTIdJson200ApplicationJsonObject?: GetTIdJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
