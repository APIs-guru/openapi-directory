import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPostsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPostsIdJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutPostsIdJsonRequestBodyPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=edit_reason" })
  editReason?: string;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw: string;
}


export class PutPostsIdJsonRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=post" })
  post?: PutPostsIdJsonRequestBodyPost;
}


export class PutPostsIdJson200ApplicationJsonPostActionsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_act" })
  canAct?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class PutPostsIdJson200ApplicationJsonPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions_summary", elemType: PutPostsIdJson200ApplicationJsonPostActionsSummary })
  actionsSummary?: PutPostsIdJson200ApplicationJsonPostActionsSummary[];

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

  @SpeakeasyMetadata({ data: "json, name=draft_sequence" })
  draftSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=edit_reason" })
  editReason?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=incoming_link_count" })
  incomingLinkCount?: number;

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

  @SpeakeasyMetadata({ data: "json, name=readers_count" })
  readersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reads" })
  reads?: number;

  @SpeakeasyMetadata({ data: "json, name=reply_count" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reply_to_post_number" })
  replyToPostNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewable_id" })
  reviewableId?: string;

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


export class PutPostsIdJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=post" })
  post?: PutPostsIdJson200ApplicationJsonPost;
}


export class PutPostsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPostsIdJsonPathParams;

  @SpeakeasyMetadata()
  headers: PutPostsIdJsonHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutPostsIdJsonRequestBody;
}


export class PutPostsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putPostsIdJson200ApplicationJsonObject?: PutPostsIdJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
