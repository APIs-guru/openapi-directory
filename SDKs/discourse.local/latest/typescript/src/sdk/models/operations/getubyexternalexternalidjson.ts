import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUByExternalExternalIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class GetUByExternalExternalIdJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class GetUByExternalExternalIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUByExternalExternalIdJsonPathParams;

  @Metadata()
  headers: GetUByExternalExternalIdJsonHeaders;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserGroupUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=group_id" })
  groupId?: number;

  @Metadata({ data: "json, name=notification_level" })
  notificationLevel?: number;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_membership_requests" })
  allowMembershipRequests?: boolean;

  @Metadata({ data: "json, name=automatic" })
  automatic?: boolean;

  @Metadata({ data: "json, name=bio_cooked" })
  bioCooked?: string;

  @Metadata({ data: "json, name=bio_excerpt" })
  bioExcerpt?: string;

  @Metadata({ data: "json, name=bio_raw" })
  bioRaw?: string;

  @Metadata({ data: "json, name=can_admin_group" })
  canAdminGroup?: boolean;

  @Metadata({ data: "json, name=can_see_members" })
  canSeeMembers?: boolean;

  @Metadata({ data: "json, name=default_notification_level" })
  defaultNotificationLevel?: number;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @Metadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @Metadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @Metadata({ data: "json, name=full_name" })
  fullName?: string;

  @Metadata({ data: "json, name=grant_trust_level" })
  grantTrustLevel?: string;

  @Metadata({ data: "json, name=has_messages" })
  hasMessages?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=incoming_email" })
  incomingEmail?: string;

  @Metadata({ data: "json, name=members_visibility_level" })
  membersVisibilityLevel?: number;

  @Metadata({ data: "json, name=membership_request_template" })
  membershipRequestTemplate?: string;

  @Metadata({ data: "json, name=mentionable_level" })
  mentionableLevel?: number;

  @Metadata({ data: "json, name=messageable_level" })
  messageableLevel?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primary_group" })
  primaryGroup?: boolean;

  @Metadata({ data: "json, name=public_admission" })
  publicAdmission?: boolean;

  @Metadata({ data: "json, name=public_exit" })
  publicExit?: boolean;

  @Metadata({ data: "json, name=publish_read_state" })
  publishReadState?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=user_count" })
  userCount?: number;

  @Metadata({ data: "json, name=visibility_level" })
  visibilityLevel?: number;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserUserAuthTokens extends SpeakeasyBase {
  @Metadata({ data: "json, name=browser" })
  browser?: string;

  @Metadata({ data: "json, name=client_ip" })
  clientIp?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=device" })
  device?: string;

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=seen_at" })
  seenAt?: string;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUserUserOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_private_messages" })
  allowPrivateMessages?: boolean;

  @Metadata({ data: "json, name=auto_track_topics_after_msecs" })
  autoTrackTopicsAfterMsecs?: number;

  @Metadata({ data: "json, name=automatically_unpin_topics" })
  automaticallyUnpinTopics?: boolean;

  @Metadata({ data: "json, name=color_scheme_id" })
  colorSchemeId?: string;

  @Metadata({ data: "json, name=dark_scheme_id" })
  darkSchemeId?: string;

  @Metadata({ data: "json, name=digest_after_minutes" })
  digestAfterMinutes?: number;

  @Metadata({ data: "json, name=dynamic_favicon" })
  dynamicFavicon?: boolean;

  @Metadata({ data: "json, name=email_digests" })
  emailDigests?: boolean;

  @Metadata({ data: "json, name=email_in_reply_to" })
  emailInReplyTo?: boolean;

  @Metadata({ data: "json, name=email_level" })
  emailLevel?: number;

  @Metadata({ data: "json, name=email_messages_level" })
  emailMessagesLevel?: number;

  @Metadata({ data: "json, name=email_previous_replies" })
  emailPreviousReplies?: number;

  @Metadata({ data: "json, name=enable_allowed_pm_users" })
  enableAllowedPmUsers?: boolean;

  @Metadata({ data: "json, name=enable_defer" })
  enableDefer?: boolean;

  @Metadata({ data: "json, name=enable_quoting" })
  enableQuoting?: boolean;

  @Metadata({ data: "json, name=external_links_in_new_tab" })
  externalLinksInNewTab?: boolean;

  @Metadata({ data: "json, name=hide_profile_and_presence" })
  hideProfileAndPresence?: boolean;

  @Metadata({ data: "json, name=homepage_id" })
  homepageId?: string;

  @Metadata({ data: "json, name=include_tl0_in_digests" })
  includeTl0InDigests?: boolean;

  @Metadata({ data: "json, name=like_notification_frequency" })
  likeNotificationFrequency?: number;

  @Metadata({ data: "json, name=mailing_list_mode" })
  mailingListMode?: boolean;

  @Metadata({ data: "json, name=mailing_list_mode_frequency" })
  mailingListModeFrequency?: number;

  @Metadata({ data: "json, name=new_topic_duration_minutes" })
  newTopicDurationMinutes?: number;

  @Metadata({ data: "json, name=notification_level_when_replying" })
  notificationLevelWhenReplying?: number;

  @Metadata({ data: "json, name=skip_new_user_tips" })
  skipNewUserTips?: boolean;

  @Metadata({ data: "json, name=text_size" })
  textSize?: string;

  @Metadata({ data: "json, name=text_size_seq" })
  textSizeSeq?: number;

  @Metadata({ data: "json, name=theme_ids" })
  themeIds?: any[];

  @Metadata({ data: "json, name=theme_key_seq" })
  themeKeySeq?: number;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=title_count_mode" })
  titleCountMode?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetUByExternalExternalIdJson200ApplicationJsonUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=allowed_pm_usernames" })
  allowedPmUsernames?: any[];

  @Metadata({ data: "json, name=avatar_template" })
  avatarTemplate?: string;

  @Metadata({ data: "json, name=badge_count" })
  badgeCount?: number;

  @Metadata({ data: "json, name=can_be_deleted" })
  canBeDeleted?: boolean;

  @Metadata({ data: "json, name=can_change_bio" })
  canChangeBio?: boolean;

  @Metadata({ data: "json, name=can_change_location" })
  canChangeLocation?: boolean;

  @Metadata({ data: "json, name=can_change_website" })
  canChangeWebsite?: boolean;

  @Metadata({ data: "json, name=can_delete_all_posts" })
  canDeleteAllPosts?: boolean;

  @Metadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=can_edit_email" })
  canEditEmail?: boolean;

  @Metadata({ data: "json, name=can_edit_name" })
  canEditName?: boolean;

  @Metadata({ data: "json, name=can_edit_username" })
  canEditUsername?: boolean;

  @Metadata({ data: "json, name=can_ignore_user" })
  canIgnoreUser?: boolean;

  @Metadata({ data: "json, name=can_mute_user" })
  canMuteUser?: boolean;

  @Metadata({ data: "json, name=can_send_private_message_to_user" })
  canSendPrivateMessageToUser?: boolean;

  @Metadata({ data: "json, name=can_send_private_messages" })
  canSendPrivateMessages?: boolean;

  @Metadata({ data: "json, name=can_upload_profile_header" })
  canUploadProfileHeader?: boolean;

  @Metadata({ data: "json, name=can_upload_user_card_background" })
  canUploadUserCardBackground?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=featured_topic" })
  featuredTopic?: string;

  @Metadata({ data: "json, name=featured_user_badge_ids" })
  featuredUserBadgeIds?: any[];

  @Metadata({ data: "json, name=flair_bg_color" })
  flairBgColor?: string;

  @Metadata({ data: "json, name=flair_color" })
  flairColor?: string;

  @Metadata({ data: "json, name=flair_url" })
  flairUrl?: string;

  @Metadata({ data: "json, name=group_users", elemType: operations.GetUByExternalExternalIdJson200ApplicationJsonUserGroupUsers })
  groupUsers?: GetUByExternalExternalIdJson200ApplicationJsonUserGroupUsers[];

  @Metadata({ data: "json, name=groups", elemType: operations.GetUByExternalExternalIdJson200ApplicationJsonUserGroups })
  groups?: GetUByExternalExternalIdJson200ApplicationJsonUserGroups[];

  @Metadata({ data: "json, name=has_title_badges" })
  hasTitleBadges?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ignored" })
  ignored?: boolean;

  @Metadata({ data: "json, name=ignored_usernames" })
  ignoredUsernames?: any[];

  @Metadata({ data: "json, name=invited_by" })
  invitedBy?: string;

  @Metadata({ data: "json, name=last_posted_at" })
  lastPostedAt?: string;

  @Metadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=mailing_list_posts_per_day" })
  mailingListPostsPerDay?: number;

  @Metadata({ data: "json, name=moderator" })
  moderator?: boolean;

  @Metadata({ data: "json, name=muted" })
  muted?: boolean;

  @Metadata({ data: "json, name=muted_category_ids" })
  mutedCategoryIds?: any[];

  @Metadata({ data: "json, name=muted_tags" })
  mutedTags?: any[];

  @Metadata({ data: "json, name=muted_usernames" })
  mutedUsernames?: any[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pending_count" })
  pendingCount?: number;

  @Metadata({ data: "json, name=post_count" })
  postCount?: number;

  @Metadata({ data: "json, name=primary_group_id" })
  primaryGroupId?: string;

  @Metadata({ data: "json, name=primary_group_name" })
  primaryGroupName?: string;

  @Metadata({ data: "json, name=profile_view_count" })
  profileViewCount?: number;

  @Metadata({ data: "json, name=recent_time_read" })
  recentTimeRead?: number;

  @Metadata({ data: "json, name=regular_category_ids" })
  regularCategoryIds?: any[];

  @Metadata({ data: "json, name=second_factor_enabled" })
  secondFactorEnabled?: boolean;

  @Metadata({ data: "json, name=staged" })
  staged?: boolean;

  @Metadata({ data: "json, name=system_avatar_template" })
  systemAvatarTemplate?: string;

  @Metadata({ data: "json, name=system_avatar_upload_id" })
  systemAvatarUploadId?: string;

  @Metadata({ data: "json, name=time_read" })
  timeRead?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=tracked_category_ids" })
  trackedCategoryIds?: any[];

  @Metadata({ data: "json, name=tracked_tags" })
  trackedTags?: any[];

  @Metadata({ data: "json, name=trust_level" })
  trustLevel?: number;

  @Metadata({ data: "json, name=uploaded_avatar_id" })
  uploadedAvatarId?: string;

  @Metadata({ data: "json, name=user_api_keys" })
  userApiKeys?: string;

  @Metadata({ data: "json, name=user_auth_tokens", elemType: operations.GetUByExternalExternalIdJson200ApplicationJsonUserUserAuthTokens })
  userAuthTokens?: GetUByExternalExternalIdJson200ApplicationJsonUserUserAuthTokens[];

  @Metadata({ data: "json, name=user_fields" })
  userFields?: Map<string, any>;

  @Metadata({ data: "json, name=user_option" })
  userOption?: GetUByExternalExternalIdJson200ApplicationJsonUserUserOption;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=watched_category_ids" })
  watchedCategoryIds?: any[];

  @Metadata({ data: "json, name=watched_first_post_category_ids" })
  watchedFirstPostCategoryIds?: any[];

  @Metadata({ data: "json, name=watched_tags" })
  watchedTags?: any[];

  @Metadata({ data: "json, name=watching_first_post_tags" })
  watchingFirstPostTags?: any[];
}


export class GetUByExternalExternalIdJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user?: GetUByExternalExternalIdJson200ApplicationJsonUser;

  @Metadata({ data: "json, name=user_badges" })
  userBadges?: any[];
}


export class GetUByExternalExternalIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUByExternalExternalIdJson200ApplicationJsonObject?: GetUByExternalExternalIdJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
