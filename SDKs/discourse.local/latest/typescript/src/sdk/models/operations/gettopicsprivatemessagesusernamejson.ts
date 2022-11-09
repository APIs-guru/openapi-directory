import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTopicsPrivateMessagesUsernameJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTopicsPrivateMessagesUsernameJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTopicsPrivateMessagesUsernameJsonPathParams;
}


export class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extras" })
  extras?: string;

  @Metadata({ data: "json, name=primary_group_id" })
  primaryGroupId?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extras" })
  extras?: string;

  @Metadata({ data: "json, name=primary_group_id" })
  primaryGroupId?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_user_count" })
  allowedUserCount?: number;

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
  categoryId?: string;

  @Metadata({ data: "json, name=closed" })
  closed?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=fancy_title" })
  fancyTitle?: string;

  @Metadata({ data: "json, name=featured_link" })
  featuredLink?: string;

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

  @Metadata({ data: "json, name=last_poster_username" })
  lastPosterUsername?: string;

  @Metadata({ data: "json, name=last_read_post_number" })
  lastReadPostNumber?: number;

  @Metadata({ data: "json, name=like_count" })
  likeCount?: number;

  @Metadata({ data: "json, name=liked" })
  liked?: boolean;

  @Metadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @Metadata({ data: "json, name=participants", elemType: operations.GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants })
  participants?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsParticipants[];

  @Metadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @Metadata({ data: "json, name=pinned_globally" })
  pinnedGlobally?: boolean;

  @Metadata({ data: "json, name=posters", elemType: operations.GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters })
  posters?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopicsPosters[];

  @Metadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @Metadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=unpinned" })
  unpinned?: string;

  @Metadata({ data: "json, name=unread_posts" })
  unreadPosts?: number;

  @Metadata({ data: "json, name=unseen" })
  unseen?: boolean;

  @Metadata({ data: "json, name=views" })
  views?: number;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_create_topic" })
  canCreateTopic?: boolean;

  @Metadata({ data: "json, name=draft" })
  draft?: string;

  @Metadata({ data: "json, name=draft_key" })
  draftKey?: string;

  @Metadata({ data: "json, name=draft_sequence" })
  draftSequence?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=topics", elemType: operations.GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics })
  topics?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicListTopics[];
}


export class GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetTopicsPrivateMessagesUsernameJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary_groups" })
  primaryGroups?: any[];

  @Metadata({ data: "json, name=topic_list" })
  topicList?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonTopicList;

  @Metadata({ data: "json, name=users", elemType: operations.GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers })
  users?: GetTopicsPrivateMessagesUsernameJson200ApplicationJsonUsers[];
}


export class GetTopicsPrivateMessagesUsernameJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTopicsPrivateMessagesUsernameJson200ApplicationJsonObject?: GetTopicsPrivateMessagesUsernameJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
