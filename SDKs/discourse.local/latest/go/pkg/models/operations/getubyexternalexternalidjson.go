package operations

type GetUByExternalExternalIDJSONPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type GetUByExternalExternalIDJSONHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type GetUByExternalExternalIDJSON200ApplicationJSONUserGroupUsers struct {
	GroupID           *int64 `json:"group_id,omitempty"`
	NotificationLevel *int64 `json:"notification_level,omitempty"`
	UserID            *int64 `json:"user_id,omitempty"`
}

type GetUByExternalExternalIDJSON200ApplicationJSONUserGroups struct {
	AllowMembershipRequests   *bool   `json:"allow_membership_requests,omitempty"`
	Automatic                 *bool   `json:"automatic,omitempty"`
	BioCooked                 *string `json:"bio_cooked,omitempty"`
	BioExcerpt                *string `json:"bio_excerpt,omitempty"`
	BioRaw                    *string `json:"bio_raw,omitempty"`
	CanAdminGroup             *bool   `json:"can_admin_group,omitempty"`
	CanSeeMembers             *bool   `json:"can_see_members,omitempty"`
	DefaultNotificationLevel  *int64  `json:"default_notification_level,omitempty"`
	DisplayName               *string `json:"display_name,omitempty"`
	FlairBgColor              *string `json:"flair_bg_color,omitempty"`
	FlairColor                *string `json:"flair_color,omitempty"`
	FlairURL                  *string `json:"flair_url,omitempty"`
	FullName                  *string `json:"full_name,omitempty"`
	GrantTrustLevel           *string `json:"grant_trust_level,omitempty"`
	HasMessages               *bool   `json:"has_messages,omitempty"`
	ID                        *int64  `json:"id,omitempty"`
	IncomingEmail             *string `json:"incoming_email,omitempty"`
	MembersVisibilityLevel    *int64  `json:"members_visibility_level,omitempty"`
	MembershipRequestTemplate *string `json:"membership_request_template,omitempty"`
	MentionableLevel          *int64  `json:"mentionable_level,omitempty"`
	MessageableLevel          *int64  `json:"messageable_level,omitempty"`
	Name                      *string `json:"name,omitempty"`
	PrimaryGroup              *bool   `json:"primary_group,omitempty"`
	PublicAdmission           *bool   `json:"public_admission,omitempty"`
	PublicExit                *bool   `json:"public_exit,omitempty"`
	PublishReadState          *bool   `json:"publish_read_state,omitempty"`
	Title                     *string `json:"title,omitempty"`
	UserCount                 *int64  `json:"user_count,omitempty"`
	VisibilityLevel           *int64  `json:"visibility_level,omitempty"`
}

type GetUByExternalExternalIDJSON200ApplicationJSONUserUserAuthTokens struct {
	Browser   *string `json:"browser,omitempty"`
	ClientIP  *string `json:"client_ip,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Device    *string `json:"device,omitempty"`
	Icon      *string `json:"icon,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	IsActive  *bool   `json:"is_active,omitempty"`
	Location  *string `json:"location,omitempty"`
	Os        *string `json:"os,omitempty"`
	SeenAt    *string `json:"seen_at,omitempty"`
}

type GetUByExternalExternalIDJSON200ApplicationJSONUserUserOption struct {
	AllowPrivateMessages          *bool         `json:"allow_private_messages,omitempty"`
	AutoTrackTopicsAfterMsecs     *int64        `json:"auto_track_topics_after_msecs,omitempty"`
	AutomaticallyUnpinTopics      *bool         `json:"automatically_unpin_topics,omitempty"`
	ColorSchemeID                 *string       `json:"color_scheme_id,omitempty"`
	DarkSchemeID                  *string       `json:"dark_scheme_id,omitempty"`
	DigestAfterMinutes            *int64        `json:"digest_after_minutes,omitempty"`
	DynamicFavicon                *bool         `json:"dynamic_favicon,omitempty"`
	EmailDigests                  *bool         `json:"email_digests,omitempty"`
	EmailInReplyTo                *bool         `json:"email_in_reply_to,omitempty"`
	EmailLevel                    *int64        `json:"email_level,omitempty"`
	EmailMessagesLevel            *int64        `json:"email_messages_level,omitempty"`
	EmailPreviousReplies          *int64        `json:"email_previous_replies,omitempty"`
	EnableAllowedPmUsers          *bool         `json:"enable_allowed_pm_users,omitempty"`
	EnableDefer                   *bool         `json:"enable_defer,omitempty"`
	EnableQuoting                 *bool         `json:"enable_quoting,omitempty"`
	ExternalLinksInNewTab         *bool         `json:"external_links_in_new_tab,omitempty"`
	HideProfileAndPresence        *bool         `json:"hide_profile_and_presence,omitempty"`
	HomepageID                    *string       `json:"homepage_id,omitempty"`
	IncludeTl0InDigests           *bool         `json:"include_tl0_in_digests,omitempty"`
	LikeNotificationFrequency     *int64        `json:"like_notification_frequency,omitempty"`
	MailingListMode               *bool         `json:"mailing_list_mode,omitempty"`
	MailingListModeFrequency      *int64        `json:"mailing_list_mode_frequency,omitempty"`
	NewTopicDurationMinutes       *int64        `json:"new_topic_duration_minutes,omitempty"`
	NotificationLevelWhenReplying *int64        `json:"notification_level_when_replying,omitempty"`
	SkipNewUserTips               *bool         `json:"skip_new_user_tips,omitempty"`
	TextSize                      *string       `json:"text_size,omitempty"`
	TextSizeSeq                   *int64        `json:"text_size_seq,omitempty"`
	ThemeIds                      []interface{} `json:"theme_ids,omitempty"`
	ThemeKeySeq                   *int64        `json:"theme_key_seq,omitempty"`
	Timezone                      *string       `json:"timezone,omitempty"`
	TitleCountMode                *string       `json:"title_count_mode,omitempty"`
	UserID                        *int64        `json:"user_id,omitempty"`
}

type GetUByExternalExternalIDJSON200ApplicationJSONUser struct {
	Admin                       *bool                                                              `json:"admin,omitempty"`
	AllowedPmUsernames          []interface{}                                                      `json:"allowed_pm_usernames,omitempty"`
	AvatarTemplate              *string                                                            `json:"avatar_template,omitempty"`
	BadgeCount                  *int64                                                             `json:"badge_count,omitempty"`
	CanBeDeleted                *bool                                                              `json:"can_be_deleted,omitempty"`
	CanChangeBio                *bool                                                              `json:"can_change_bio,omitempty"`
	CanChangeLocation           *bool                                                              `json:"can_change_location,omitempty"`
	CanChangeWebsite            *bool                                                              `json:"can_change_website,omitempty"`
	CanDeleteAllPosts           *bool                                                              `json:"can_delete_all_posts,omitempty"`
	CanEdit                     *bool                                                              `json:"can_edit,omitempty"`
	CanEditEmail                *bool                                                              `json:"can_edit_email,omitempty"`
	CanEditName                 *bool                                                              `json:"can_edit_name,omitempty"`
	CanEditUsername             *bool                                                              `json:"can_edit_username,omitempty"`
	CanIgnoreUser               *bool                                                              `json:"can_ignore_user,omitempty"`
	CanMuteUser                 *bool                                                              `json:"can_mute_user,omitempty"`
	CanSendPrivateMessageToUser *bool                                                              `json:"can_send_private_message_to_user,omitempty"`
	CanSendPrivateMessages      *bool                                                              `json:"can_send_private_messages,omitempty"`
	CanUploadProfileHeader      *bool                                                              `json:"can_upload_profile_header,omitempty"`
	CanUploadUserCardBackground *bool                                                              `json:"can_upload_user_card_background,omitempty"`
	CreatedAt                   *string                                                            `json:"created_at,omitempty"`
	CustomFields                map[string]interface{}                                             `json:"custom_fields,omitempty"`
	FeaturedTopic               *string                                                            `json:"featured_topic,omitempty"`
	FeaturedUserBadgeIds        []interface{}                                                      `json:"featured_user_badge_ids,omitempty"`
	FlairBgColor                *string                                                            `json:"flair_bg_color,omitempty"`
	FlairColor                  *string                                                            `json:"flair_color,omitempty"`
	FlairURL                    *string                                                            `json:"flair_url,omitempty"`
	GroupUsers                  []GetUByExternalExternalIDJSON200ApplicationJSONUserGroupUsers     `json:"group_users,omitempty"`
	Groups                      []GetUByExternalExternalIDJSON200ApplicationJSONUserGroups         `json:"groups,omitempty"`
	HasTitleBadges              *bool                                                              `json:"has_title_badges,omitempty"`
	ID                          *int64                                                             `json:"id,omitempty"`
	Ignored                     *bool                                                              `json:"ignored,omitempty"`
	IgnoredUsernames            []interface{}                                                      `json:"ignored_usernames,omitempty"`
	InvitedBy                   *string                                                            `json:"invited_by,omitempty"`
	LastPostedAt                *string                                                            `json:"last_posted_at,omitempty"`
	LastSeenAt                  *string                                                            `json:"last_seen_at,omitempty"`
	Locale                      *string                                                            `json:"locale,omitempty"`
	MailingListPostsPerDay      *int64                                                             `json:"mailing_list_posts_per_day,omitempty"`
	Moderator                   *bool                                                              `json:"moderator,omitempty"`
	Muted                       *bool                                                              `json:"muted,omitempty"`
	MutedCategoryIds            []interface{}                                                      `json:"muted_category_ids,omitempty"`
	MutedTags                   []interface{}                                                      `json:"muted_tags,omitempty"`
	MutedUsernames              []interface{}                                                      `json:"muted_usernames,omitempty"`
	Name                        *string                                                            `json:"name,omitempty"`
	PendingCount                *int64                                                             `json:"pending_count,omitempty"`
	PostCount                   *int64                                                             `json:"post_count,omitempty"`
	PrimaryGroupID              *string                                                            `json:"primary_group_id,omitempty"`
	PrimaryGroupName            *string                                                            `json:"primary_group_name,omitempty"`
	ProfileViewCount            *int64                                                             `json:"profile_view_count,omitempty"`
	RecentTimeRead              *int64                                                             `json:"recent_time_read,omitempty"`
	RegularCategoryIds          []interface{}                                                      `json:"regular_category_ids,omitempty"`
	SecondFactorEnabled         *bool                                                              `json:"second_factor_enabled,omitempty"`
	Staged                      *bool                                                              `json:"staged,omitempty"`
	SystemAvatarTemplate        *string                                                            `json:"system_avatar_template,omitempty"`
	SystemAvatarUploadID        *string                                                            `json:"system_avatar_upload_id,omitempty"`
	TimeRead                    *int64                                                             `json:"time_read,omitempty"`
	Title                       *string                                                            `json:"title,omitempty"`
	TrackedCategoryIds          []interface{}                                                      `json:"tracked_category_ids,omitempty"`
	TrackedTags                 []interface{}                                                      `json:"tracked_tags,omitempty"`
	TrustLevel                  *int64                                                             `json:"trust_level,omitempty"`
	UploadedAvatarID            *string                                                            `json:"uploaded_avatar_id,omitempty"`
	UserAPIKeys                 *string                                                            `json:"user_api_keys,omitempty"`
	UserAuthTokens              []GetUByExternalExternalIDJSON200ApplicationJSONUserUserAuthTokens `json:"user_auth_tokens,omitempty"`
	UserFields                  map[string]interface{}                                             `json:"user_fields,omitempty"`
	UserOption                  *GetUByExternalExternalIDJSON200ApplicationJSONUserUserOption      `json:"user_option,omitempty"`
	Username                    *string                                                            `json:"username,omitempty"`
	WatchedCategoryIds          []interface{}                                                      `json:"watched_category_ids,omitempty"`
	WatchedFirstPostCategoryIds []interface{}                                                      `json:"watched_first_post_category_ids,omitempty"`
	WatchedTags                 []interface{}                                                      `json:"watched_tags,omitempty"`
	WatchingFirstPostTags       []interface{}                                                      `json:"watching_first_post_tags,omitempty"`
}

type GetUByExternalExternalIDJSON200ApplicationJSON struct {
	User       *GetUByExternalExternalIDJSON200ApplicationJSONUser `json:"user,omitempty"`
	UserBadges []interface{}                                       `json:"user_badges,omitempty"`
}

type GetUByExternalExternalIDJSONRequest struct {
	PathParams GetUByExternalExternalIDJSONPathParams
	Headers    GetUByExternalExternalIDJSONHeaders
}

type GetUByExternalExternalIDJSONResponse struct {
	ContentType                                          string
	GetUByExternalExternalIDJSON200ApplicationJSONObject *GetUByExternalExternalIDJSON200ApplicationJSON
	StatusCode                                           int64
}
