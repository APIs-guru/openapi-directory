import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUByExternalExternalIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetUByExternalExternalIdJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserGroupUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_membership_requests" })
  allowMembershipRequests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automatic" })
  automatic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bio_cooked" })
  bioCooked?: string;

  @SpeakeasyMetadata({ data: "json, name=bio_excerpt" })
  bioExcerpt?: string;

  @SpeakeasyMetadata({ data: "json, name=bio_raw" })
  bioRaw?: string;

  @SpeakeasyMetadata({ data: "json, name=can_admin_group" })
  canAdminGroup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_see_members" })
  canSeeMembers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=default_notification_level" })
  defaultNotificationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=grant_trust_level" })
  grantTrustLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=has_messages" })
  hasMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=incoming_email" })
  incomingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=members_visibility_level" })
  membersVisibilityLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=membership_request_template" })
  membershipRequestTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=mentionable_level" })
  mentionableLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=messageable_level" })
  messageableLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_group" })
  primaryGroup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_admission" })
  publicAdmission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_exit" })
  publicExit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publish_read_state" })
  publishReadState?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=user_count" })
  userCount?: number;

  @SpeakeasyMetadata({ data: "json, name=visibility_level" })
  visibilityLevel?: number;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserUserAuthTokens extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=browser" })
  browser?: string;

  @SpeakeasyMetadata({ data: "json, name=client_ip" })
  clientIp?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=seen_at" })
  seenAt?: string;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserUserOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_private_messages" })
  allowPrivateMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_track_topics_after_msecs" })
  autoTrackTopicsAfterMsecs?: number;

  @SpeakeasyMetadata({ data: "json, name=automatically_unpin_topics" })
  automaticallyUnpinTopics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color_scheme_id" })
  colorSchemeId?: string;

  @SpeakeasyMetadata({ data: "json, name=dark_scheme_id" })
  darkSchemeId?: string;

  @SpeakeasyMetadata({ data: "json, name=digest_after_minutes" })
  digestAfterMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=dynamic_favicon" })
  dynamicFavicon?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email_digests" })
  emailDigests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email_in_reply_to" })
  emailInReplyTo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email_level" })
  emailLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=email_messages_level" })
  emailMessagesLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=email_previous_replies" })
  emailPreviousReplies?: number;

  @SpeakeasyMetadata({ data: "json, name=enable_allowed_pm_users" })
  enableAllowedPmUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable_defer" })
  enableDefer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable_quoting" })
  enableQuoting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=external_links_in_new_tab" })
  externalLinksInNewTab?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_profile_and_presence" })
  hideProfileAndPresence?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homepage_id" })
  homepageId?: string;

  @SpeakeasyMetadata({ data: "json, name=include_tl0_in_digests" })
  includeTl0InDigests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=like_notification_frequency" })
  likeNotificationFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=mailing_list_mode" })
  mailingListMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mailing_list_mode_frequency" })
  mailingListModeFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=new_topic_duration_minutes" })
  newTopicDurationMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=notification_level_when_replying" })
  notificationLevelWhenReplying?: number;

  @SpeakeasyMetadata({ data: "json, name=skip_new_user_tips" })
  skipNewUserTips?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text_size" })
  textSize?: string;

  @SpeakeasyMetadata({ data: "json, name=text_size_seq" })
  textSizeSeq?: number;

  @SpeakeasyMetadata({ data: "json, name=theme_ids" })
  themeIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=theme_key_seq" })
  themeKeySeq?: number;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=title_count_mode" })
  titleCountMode?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_pm_usernames" })
  allowedPmUsernames?: any[];

  @SpeakeasyMetadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=badge_count" })
  badgeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=can_be_deleted" })
  canBeDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_change_bio" })
  canChangeBio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_change_location" })
  canChangeLocation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_change_website" })
  canChangeWebsite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_delete_all_posts" })
  canDeleteAllPosts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit_email" })
  canEditEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit_name" })
  canEditName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit_username" })
  canEditUsername?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_ignore_user" })
  canIgnoreUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_mute_user" })
  canMuteUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_send_private_message_to_user" })
  canSendPrivateMessageToUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_send_private_messages" })
  canSendPrivateMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_upload_profile_header" })
  canUploadProfileHeader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_upload_user_card_background" })
  canUploadUserCardBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=featured_topic" })
  featuredTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=featured_user_badge_ids" })
  featuredUserBadgeIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @SpeakeasyMetadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=group_users", elemType: GetUByExternalExternalIdJson200ApplicationJsonUserGroupUsers })
  groupUsers?: GetUByExternalExternalIdJson200ApplicationJsonUserGroupUsers[];

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: GetUByExternalExternalIdJson200ApplicationJsonUserGroups })
  groups?: GetUByExternalExternalIdJson200ApplicationJsonUserGroups[];

  @SpeakeasyMetadata({ data: "json, name=has_title_badges" })
  hasTitleBadges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ignored" })
  ignored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignored_usernames" })
  ignoredUsernames?: any[];

  @SpeakeasyMetadata({ data: "json, name=invited_by" })
  invitedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=last_posted_at" })
  lastPostedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_list_posts_per_day" })
  mailingListPostsPerDay?: number;

  @SpeakeasyMetadata({ data: "json, name=moderator" })
  moderator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=muted" })
  muted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=muted_category_ids" })
  mutedCategoryIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=muted_tags" })
  mutedTags?: any[];

  @SpeakeasyMetadata({ data: "json, name=muted_usernames" })
  mutedUsernames?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pending_count" })
  pendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=post_count" })
  postCount?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_group_id" })
  primaryGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_group_name" })
  primaryGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_view_count" })
  profileViewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=recent_time_read" })
  recentTimeRead?: number;

  @SpeakeasyMetadata({ data: "json, name=regular_category_ids" })
  regularCategoryIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=second_factor_enabled" })
  secondFactorEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=staged" })
  staged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=system_avatar_template" })
  systemAvatarTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=system_avatar_upload_id" })
  systemAvatarUploadId?: string;

  @SpeakeasyMetadata({ data: "json, name=time_read" })
  timeRead?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=tracked_category_ids" })
  trackedCategoryIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=tracked_tags" })
  trackedTags?: any[];

  @SpeakeasyMetadata({ data: "json, name=trust_level" })
  trustLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=uploaded_avatar_id" })
  uploadedAvatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_api_keys" })
  userApiKeys?: string;

  @SpeakeasyMetadata({ data: "json, name=user_auth_tokens", elemType: GetUByExternalExternalIdJson200ApplicationJsonUserUserAuthTokens })
  userAuthTokens?: GetUByExternalExternalIdJson200ApplicationJsonUserUserAuthTokens[];

  @SpeakeasyMetadata({ data: "json, name=user_fields" })
  userFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=user_option" })
  userOption?: GetUByExternalExternalIdJson200ApplicationJsonUserUserOption;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=watched_category_ids" })
  watchedCategoryIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=watched_first_post_category_ids" })
  watchedFirstPostCategoryIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=watched_tags" })
  watchedTags?: any[];

  @SpeakeasyMetadata({ data: "json, name=watching_first_post_tags" })
  watchingFirstPostTags?: any[];
}


export class GetUByExternalExternalIdJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: GetUByExternalExternalIdJson200ApplicationJsonUser;

  @SpeakeasyMetadata({ data: "json, name=user_badges" })
  userBadges?: any[];
}


export class GetUByExternalExternalIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUByExternalExternalIdJsonPathParams;

  @SpeakeasyMetadata()
  headers: GetUByExternalExternalIdJsonHeaders;
}


export class GetUByExternalExternalIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUByExternalExternalIdJson200ApplicationJsonObject?: GetUByExternalExternalIdJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
