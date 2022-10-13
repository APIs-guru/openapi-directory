package operations

type GetUUsernameJSONPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUUsernameJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type GetUUsernameJSONRequest struct {
	PathParams GetUUsernameJSONPathParams
	Headers    GetUUsernameJSONHeaders
}

type GetUUsernameJSON200ApplicationJSONUserGroupUsers struct {
	GroupID           *int64 `json:"group_id"`
	NotificationLevel *int64 `json:"notification_level"`
	UserID            *int64 `json:"user_id"`
}

type GetUUsernameJSON200ApplicationJSONUserGroups struct {
	AllowMembershipRequests   *bool   `json:"allow_membership_requests"`
	Automatic                 *bool   `json:"automatic"`
	BioCooked                 *string `json:"bio_cooked"`
	BioExcerpt                *string `json:"bio_excerpt"`
	BioRaw                    *string `json:"bio_raw"`
	CanAdminGroup             *bool   `json:"can_admin_group"`
	CanSeeMembers             *bool   `json:"can_see_members"`
	DefaultNotificationLevel  *int64  `json:"default_notification_level"`
	DisplayName               *string `json:"display_name"`
	FlairBgColor              *string `json:"flair_bg_color"`
	FlairColor                *string `json:"flair_color"`
	FlairURL                  *string `json:"flair_url"`
	FullName                  *string `json:"full_name"`
	GrantTrustLevel           *string `json:"grant_trust_level"`
	HasMessages               *bool   `json:"has_messages"`
	ID                        *int64  `json:"id"`
	IncomingEmail             *string `json:"incoming_email"`
	MembersVisibilityLevel    *int64  `json:"members_visibility_level"`
	MembershipRequestTemplate *string `json:"membership_request_template"`
	MentionableLevel          *int64  `json:"mentionable_level"`
	MessageableLevel          *int64  `json:"messageable_level"`
	Name                      *string `json:"name"`
	PrimaryGroup              *bool   `json:"primary_group"`
	PublicAdmission           *bool   `json:"public_admission"`
	PublicExit                *bool   `json:"public_exit"`
	PublishReadState          *bool   `json:"publish_read_state"`
	Title                     *string `json:"title"`
	UserCount                 *int64  `json:"user_count"`
	VisibilityLevel           *int64  `json:"visibility_level"`
}

type GetUUsernameJSON200ApplicationJSONUserUserAuthTokens struct {
	Browser   *string `json:"browser"`
	ClientIP  *string `json:"client_ip"`
	CreatedAt *string `json:"created_at"`
	Device    *string `json:"device"`
	Icon      *string `json:"icon"`
	ID        *int64  `json:"id"`
	IsActive  *bool   `json:"is_active"`
	Location  *string `json:"location"`
	Os        *string `json:"os"`
	SeenAt    *string `json:"seen_at"`
}

type GetUUsernameJSON200ApplicationJSONUserUserOption struct {
	AllowPrivateMessages          *bool         `json:"allow_private_messages"`
	AutoTrackTopicsAfterMsecs     *int64        `json:"auto_track_topics_after_msecs"`
	AutomaticallyUnpinTopics      *bool         `json:"automatically_unpin_topics"`
	ColorSchemeID                 *string       `json:"color_scheme_id"`
	DarkSchemeID                  *string       `json:"dark_scheme_id"`
	DigestAfterMinutes            *int64        `json:"digest_after_minutes"`
	DynamicFavicon                *bool         `json:"dynamic_favicon"`
	EmailDigests                  *bool         `json:"email_digests"`
	EmailInReplyTo                *bool         `json:"email_in_reply_to"`
	EmailLevel                    *int64        `json:"email_level"`
	EmailMessagesLevel            *int64        `json:"email_messages_level"`
	EmailPreviousReplies          *int64        `json:"email_previous_replies"`
	EnableAllowedPmUsers          *bool         `json:"enable_allowed_pm_users"`
	EnableDefer                   *bool         `json:"enable_defer"`
	EnableQuoting                 *bool         `json:"enable_quoting"`
	ExternalLinksInNewTab         *bool         `json:"external_links_in_new_tab"`
	HideProfileAndPresence        *bool         `json:"hide_profile_and_presence"`
	HomepageID                    *string       `json:"homepage_id"`
	IncludeTl0InDigests           *bool         `json:"include_tl0_in_digests"`
	LikeNotificationFrequency     *int64        `json:"like_notification_frequency"`
	MailingListMode               *bool         `json:"mailing_list_mode"`
	MailingListModeFrequency      *int64        `json:"mailing_list_mode_frequency"`
	NewTopicDurationMinutes       *int64        `json:"new_topic_duration_minutes"`
	NotificationLevelWhenReplying *int64        `json:"notification_level_when_replying"`
	SkipNewUserTips               *bool         `json:"skip_new_user_tips"`
	TextSize                      *string       `json:"text_size"`
	TextSizeSeq                   *int64        `json:"text_size_seq"`
	ThemeIds                      []interface{} `json:"theme_ids"`
	ThemeKeySeq                   *int64        `json:"theme_key_seq"`
	Timezone                      *string       `json:"timezone"`
	TitleCountMode                *string       `json:"title_count_mode"`
	UserID                        *int64        `json:"user_id"`
}

type GetUUsernameJSON200ApplicationJSONUser struct {
	Admin                       *bool                                                  `json:"admin"`
	AllowedPmUsernames          []interface{}                                          `json:"allowed_pm_usernames"`
	AvatarTemplate              *string                                                `json:"avatar_template"`
	BadgeCount                  *int64                                                 `json:"badge_count"`
	CanBeDeleted                *bool                                                  `json:"can_be_deleted"`
	CanChangeBio                *bool                                                  `json:"can_change_bio"`
	CanChangeLocation           *bool                                                  `json:"can_change_location"`
	CanChangeWebsite            *bool                                                  `json:"can_change_website"`
	CanDeleteAllPosts           *bool                                                  `json:"can_delete_all_posts"`
	CanEdit                     *bool                                                  `json:"can_edit"`
	CanEditEmail                *bool                                                  `json:"can_edit_email"`
	CanEditName                 *bool                                                  `json:"can_edit_name"`
	CanEditUsername             *bool                                                  `json:"can_edit_username"`
	CanIgnoreUser               *bool                                                  `json:"can_ignore_user"`
	CanMuteUser                 *bool                                                  `json:"can_mute_user"`
	CanSendPrivateMessageToUser *bool                                                  `json:"can_send_private_message_to_user"`
	CanSendPrivateMessages      *bool                                                  `json:"can_send_private_messages"`
	CanUploadProfileHeader      *bool                                                  `json:"can_upload_profile_header"`
	CanUploadUserCardBackground *bool                                                  `json:"can_upload_user_card_background"`
	CreatedAt                   *string                                                `json:"created_at"`
	CustomFields                map[string]interface{}                                 `json:"custom_fields"`
	FeaturedTopic               *string                                                `json:"featured_topic"`
	FeaturedUserBadgeIds        []interface{}                                          `json:"featured_user_badge_ids"`
	FlairBgColor                *string                                                `json:"flair_bg_color"`
	FlairColor                  *string                                                `json:"flair_color"`
	FlairURL                    *string                                                `json:"flair_url"`
	GroupUsers                  []GetUUsernameJSON200ApplicationJSONUserGroupUsers     `json:"group_users"`
	Groups                      []GetUUsernameJSON200ApplicationJSONUserGroups         `json:"groups"`
	HasTitleBadges              *bool                                                  `json:"has_title_badges"`
	ID                          *int64                                                 `json:"id"`
	Ignored                     *bool                                                  `json:"ignored"`
	IgnoredUsernames            []interface{}                                          `json:"ignored_usernames"`
	InvitedBy                   *string                                                `json:"invited_by"`
	LastPostedAt                *string                                                `json:"last_posted_at"`
	LastSeenAt                  *string                                                `json:"last_seen_at"`
	Locale                      *string                                                `json:"locale"`
	MailingListPostsPerDay      *int64                                                 `json:"mailing_list_posts_per_day"`
	Moderator                   *bool                                                  `json:"moderator"`
	Muted                       *bool                                                  `json:"muted"`
	MutedCategoryIds            []interface{}                                          `json:"muted_category_ids"`
	MutedTags                   []interface{}                                          `json:"muted_tags"`
	MutedUsernames              []interface{}                                          `json:"muted_usernames"`
	Name                        *string                                                `json:"name"`
	PendingCount                *int64                                                 `json:"pending_count"`
	PostCount                   *int64                                                 `json:"post_count"`
	PrimaryGroupID              *string                                                `json:"primary_group_id"`
	PrimaryGroupName            *string                                                `json:"primary_group_name"`
	ProfileViewCount            *int64                                                 `json:"profile_view_count"`
	RecentTimeRead              *int64                                                 `json:"recent_time_read"`
	RegularCategoryIds          []interface{}                                          `json:"regular_category_ids"`
	SecondFactorEnabled         *bool                                                  `json:"second_factor_enabled"`
	Staged                      *bool                                                  `json:"staged"`
	SystemAvatarTemplate        *string                                                `json:"system_avatar_template"`
	SystemAvatarUploadID        *string                                                `json:"system_avatar_upload_id"`
	TimeRead                    *int64                                                 `json:"time_read"`
	Title                       *string                                                `json:"title"`
	TrackedCategoryIds          []interface{}                                          `json:"tracked_category_ids"`
	TrackedTags                 []interface{}                                          `json:"tracked_tags"`
	TrustLevel                  *int64                                                 `json:"trust_level"`
	UploadedAvatarID            *string                                                `json:"uploaded_avatar_id"`
	UserAPIKeys                 *string                                                `json:"user_api_keys"`
	UserAuthTokens              []GetUUsernameJSON200ApplicationJSONUserUserAuthTokens `json:"user_auth_tokens"`
	UserFields                  map[string]interface{}                                 `json:"user_fields"`
	UserOption                  *GetUUsernameJSON200ApplicationJSONUserUserOption      `json:"user_option"`
	Username                    *string                                                `json:"username"`
	WatchedCategoryIds          []interface{}                                          `json:"watched_category_ids"`
	WatchedFirstPostCategoryIds []interface{}                                          `json:"watched_first_post_category_ids"`
	WatchedTags                 []interface{}                                          `json:"watched_tags"`
	WatchingFirstPostTags       []interface{}                                          `json:"watching_first_post_tags"`
}

type GetUUsernameJSON200ApplicationJSON struct {
	User       *GetUUsernameJSON200ApplicationJSONUser `json:"user"`
	UserBadges []interface{}                           `json:"user_badges"`
}

type GetUUsernameJSONResponse struct {
	ContentType                              string
	GetUUsernameJSON200ApplicationJSONObject *GetUUsernameJSON200ApplicationJSON
	StatusCode                               int64
}
