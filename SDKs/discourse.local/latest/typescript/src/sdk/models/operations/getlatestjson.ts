import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLatestJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ascending" })
  ascending?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;
}


export class GetLatestJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class GetLatestJson200ApplicationJsonTopicListTopicsPosters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_group_id" })
  primaryGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetLatestJson200ApplicationJsonTopicListTopics extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=last_poster_username" })
  lastPosterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=last_read_post_number" })
  lastReadPostNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=like_count" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=liked" })
  liked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=op_like_count" })
  opLikeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pinned_globally" })
  pinnedGlobally?: boolean;

  @SpeakeasyMetadata({ data: "json, name=posters", elemType: GetLatestJson200ApplicationJsonTopicListTopicsPosters })
  posters?: GetLatestJson200ApplicationJsonTopicListTopicsPosters[];

  @SpeakeasyMetadata({ data: "json, name=posts_count" })
  postsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=unpinned" })
  unpinned?: string;

  @SpeakeasyMetadata({ data: "json, name=unread_posts" })
  unreadPosts?: number;

  @SpeakeasyMetadata({ data: "json, name=unseen" })
  unseen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: number;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}


export class GetLatestJson200ApplicationJsonTopicList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_create_topic" })
  canCreateTopic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: string;

  @SpeakeasyMetadata({ data: "json, name=draft_key" })
  draftKey?: string;

  @SpeakeasyMetadata({ data: "json, name=draft_sequence" })
  draftSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: GetLatestJson200ApplicationJsonTopicListTopics })
  topics?: GetLatestJson200ApplicationJsonTopicListTopics[];
}


export class GetLatestJson200ApplicationJsonUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetLatestJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary_groups" })
  primaryGroups?: any[];

  @SpeakeasyMetadata({ data: "json, name=topic_list" })
  topicList?: GetLatestJson200ApplicationJsonTopicList;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: GetLatestJson200ApplicationJsonUsers })
  users?: GetLatestJson200ApplicationJsonUsers[];
}


export class GetLatestJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLatestJsonQueryParams;

  @SpeakeasyMetadata()
  headers: GetLatestJsonHeaders;
}


export class GetLatestJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLatestJson200ApplicationJsonObject?: GetLatestJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
