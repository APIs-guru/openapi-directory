import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTopJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class GetTopJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTopJsonHeaders;
}


export class GetTopJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extras" })
  extras?: string;

  @Metadata({ data: "json, name=primary_group_id" })
  primaryGroupId?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetTopJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=op_like_count" })
  opLikeCount?: number;

  @Metadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @Metadata({ data: "json, name=pinned_globally" })
  pinnedGlobally?: boolean;

  @Metadata({ data: "json, name=posters", elemType: operations.GetTopJson200ApplicationJsonTopicListTopicsPosters })
  posters?: GetTopJson200ApplicationJsonTopicListTopicsPosters[];

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


export class GetTopJson200ApplicationJsonTopicList extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_create_topic" })
  canCreateTopic?: boolean;

  @Metadata({ data: "json, name=draft" })
  draft?: string;

  @Metadata({ data: "json, name=draft_key" })
  draftKey?: string;

  @Metadata({ data: "json, name=draft_sequence" })
  draftSequence?: number;

  @Metadata({ data: "json, name=for_period" })
  forPeriod?: string;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=topics", elemType: operations.GetTopJson200ApplicationJsonTopicListTopics })
  topics?: GetTopJson200ApplicationJsonTopicListTopics[];
}


export class GetTopJson200ApplicationJsonUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetTopJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary_groups" })
  primaryGroups?: any[];

  @Metadata({ data: "json, name=topic_list" })
  topicList?: GetTopJson200ApplicationJsonTopicList;

  @Metadata({ data: "json, name=users", elemType: operations.GetTopJson200ApplicationJsonUsers })
  users?: GetTopJson200ApplicationJsonUsers[];
}


export class GetTopJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTopJson200ApplicationJsonObject?: GetTopJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
