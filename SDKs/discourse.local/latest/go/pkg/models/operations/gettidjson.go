package operations

type GetTIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTIDJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type GetTIDJSONRequest struct {
	PathParams GetTIDJSONPathParams
	Headers    GetTIDJSONHeaders
}

type GetTIDJSON200ApplicationJSONActionsSummary struct {
	CanAct *bool  `json:"can_act"`
	Count  *int64 `json:"count"`
	Hidden *bool  `json:"hidden"`
	ID     *int64 `json:"id"`
}

type GetTIDJSON200ApplicationJSONDetailsCreatedBy struct {
	AvatarTemplate *string `json:"avatar_template"`
	ID             *int64  `json:"id"`
	Name           *string `json:"name"`
	Username       *string `json:"username"`
}

type GetTIDJSON200ApplicationJSONDetailsLastPoster struct {
	AvatarTemplate *string `json:"avatar_template"`
	ID             *int64  `json:"id"`
	Name           *string `json:"name"`
	Username       *string `json:"username"`
}

type GetTIDJSON200ApplicationJSONDetailsParticipants struct {
	AvatarTemplate   *string `json:"avatar_template"`
	FlairBgColor     *string `json:"flair_bg_color"`
	FlairColor       *string `json:"flair_color"`
	FlairName        *string `json:"flair_name"`
	FlairURL         *string `json:"flair_url"`
	ID               *int64  `json:"id"`
	Name             *string `json:"name"`
	PostCount        *int64  `json:"post_count"`
	PrimaryGroupName *string `json:"primary_group_name"`
	Username         *string `json:"username"`
}

type GetTIDJSON200ApplicationJSONDetails struct {
	CanConvertTopic       *bool                                             `json:"can_convert_topic"`
	CanCreatePost         *bool                                             `json:"can_create_post"`
	CanDelete             *bool                                             `json:"can_delete"`
	CanEdit               *bool                                             `json:"can_edit"`
	CanFlagTopic          *bool                                             `json:"can_flag_topic"`
	CanMovePosts          *bool                                             `json:"can_move_posts"`
	CanRemoveAllowedUsers *bool                                             `json:"can_remove_allowed_users"`
	CanRemoveSelfID       *int64                                            `json:"can_remove_self_id"`
	CanReplyAsNewTopic    *bool                                             `json:"can_reply_as_new_topic"`
	CanReviewTopic        *bool                                             `json:"can_review_topic"`
	CreatedBy             *GetTIDJSON200ApplicationJSONDetailsCreatedBy     `json:"created_by"`
	LastPoster            *GetTIDJSON200ApplicationJSONDetailsLastPoster    `json:"last_poster"`
	NotificationLevel     *int64                                            `json:"notification_level"`
	Participants          []GetTIDJSON200ApplicationJSONDetailsParticipants `json:"participants"`
}

type GetTIDJSON200ApplicationJSONPostStreamPostsActionsSummary struct {
	CanAct *bool  `json:"can_act"`
	ID     *int64 `json:"id"`
}

type GetTIDJSON200ApplicationJSONPostStreamPostsLinkCounts struct {
	Clicks     *int64  `json:"clicks"`
	Internal   *bool   `json:"internal"`
	Reflection *bool   `json:"reflection"`
	URL        *string `json:"url"`
}

type GetTIDJSON200ApplicationJSONPostStreamPosts struct {
	ActionsSummary              []GetTIDJSON200ApplicationJSONPostStreamPostsActionsSummary `json:"actions_summary"`
	Admin                       *bool                                                       `json:"admin"`
	AvatarTemplate              *string                                                     `json:"avatar_template"`
	CanDelete                   *bool                                                       `json:"can_delete"`
	CanEdit                     *bool                                                       `json:"can_edit"`
	CanRecover                  *bool                                                       `json:"can_recover"`
	CanViewEditHistory          *bool                                                       `json:"can_view_edit_history"`
	CanWiki                     *bool                                                       `json:"can_wiki"`
	Cooked                      *string                                                     `json:"cooked"`
	CreatedAt                   *string                                                     `json:"created_at"`
	DeletedAt                   *string                                                     `json:"deleted_at"`
	DisplayUsername             *string                                                     `json:"display_username"`
	EditReason                  *string                                                     `json:"edit_reason"`
	FlairBgColor                *string                                                     `json:"flair_bg_color"`
	FlairColor                  *string                                                     `json:"flair_color"`
	FlairName                   *string                                                     `json:"flair_name"`
	FlairURL                    *string                                                     `json:"flair_url"`
	Hidden                      *bool                                                       `json:"hidden"`
	ID                          *int64                                                      `json:"id"`
	IncomingLinkCount           *int64                                                      `json:"incoming_link_count"`
	LinkCounts                  []GetTIDJSON200ApplicationJSONPostStreamPostsLinkCounts     `json:"link_counts"`
	Moderator                   *bool                                                       `json:"moderator"`
	Name                        *string                                                     `json:"name"`
	PostNumber                  *int64                                                      `json:"post_number"`
	PostType                    *int64                                                      `json:"post_type"`
	PrimaryGroupName            *string                                                     `json:"primary_group_name"`
	QuoteCount                  *int64                                                      `json:"quote_count"`
	Read                        *bool                                                       `json:"read"`
	ReadersCount                *int64                                                      `json:"readers_count"`
	Reads                       *int64                                                      `json:"reads"`
	ReplyCount                  *int64                                                      `json:"reply_count"`
	ReplyToPostNumber           *string                                                     `json:"reply_to_post_number"`
	ReviewableID                *int64                                                      `json:"reviewable_id"`
	ReviewableScoreCount        *int64                                                      `json:"reviewable_score_count"`
	ReviewableScorePendingCount *int64                                                      `json:"reviewable_score_pending_count"`
	Score                       *float64                                                    `json:"score"`
	Staff                       *bool                                                       `json:"staff"`
	TopicID                     *int64                                                      `json:"topic_id"`
	TopicSlug                   *string                                                     `json:"topic_slug"`
	TrustLevel                  *int64                                                      `json:"trust_level"`
	UpdatedAt                   *string                                                     `json:"updated_at"`
	UserDeleted                 *bool                                                       `json:"user_deleted"`
	UserID                      *int64                                                      `json:"user_id"`
	UserTitle                   *string                                                     `json:"user_title"`
	Username                    *string                                                     `json:"username"`
	Version                     *int64                                                      `json:"version"`
	Wiki                        *bool                                                       `json:"wiki"`
	Yours                       *bool                                                       `json:"yours"`
}

type GetTIDJSON200ApplicationJSONPostStream struct {
	Posts  []GetTIDJSON200ApplicationJSONPostStreamPosts `json:"posts"`
	Stream []interface{}                                 `json:"stream"`
}

type GetTIDJSON200ApplicationJSONSuggestedTopicsPostersUser struct {
	AvatarTemplate *string `json:"avatar_template"`
	ID             *int64  `json:"id"`
	Name           *string `json:"name"`
	Username       *string `json:"username"`
}

type GetTIDJSON200ApplicationJSONSuggestedTopicsPosters struct {
	Description *string                                                 `json:"description"`
	Extras      *string                                                 `json:"extras"`
	User        *GetTIDJSON200ApplicationJSONSuggestedTopicsPostersUser `json:"user"`
}

type GetTIDJSON200ApplicationJSONSuggestedTopics struct {
	Archetype          *string                                              `json:"archetype"`
	Archived           *bool                                                `json:"archived"`
	Bookmarked         *bool                                                `json:"bookmarked"`
	Bumped             *bool                                                `json:"bumped"`
	BumpedAt           *string                                              `json:"bumped_at"`
	CategoryID         *int64                                               `json:"category_id"`
	Closed             *bool                                                `json:"closed"`
	CreatedAt          *string                                              `json:"created_at"`
	FancyTitle         *string                                              `json:"fancy_title"`
	FeaturedLink       *string                                              `json:"featured_link"`
	HighestPostNumber  *int64                                               `json:"highest_post_number"`
	ID                 *int64                                               `json:"id"`
	ImageURL           *string                                              `json:"image_url"`
	LastPostedAt       *string                                              `json:"last_posted_at"`
	LastReadPostNumber *int64                                               `json:"last_read_post_number"`
	LikeCount          *int64                                               `json:"like_count"`
	Liked              *bool                                                `json:"liked"`
	NotificationLevel  *int64                                               `json:"notification_level"`
	Pinned             *bool                                                `json:"pinned"`
	Posters            []GetTIDJSON200ApplicationJSONSuggestedTopicsPosters `json:"posters"`
	PostsCount         *int64                                               `json:"posts_count"`
	ReplyCount         *int64                                               `json:"reply_count"`
	Slug               *string                                              `json:"slug"`
	Title              *string                                              `json:"title"`
	Unpinned           *bool                                                `json:"unpinned"`
	UnreadPosts        *int64                                               `json:"unread_posts"`
	Unseen             *bool                                                `json:"unseen"`
	Views              *int64                                               `json:"views"`
	Visible            *bool                                                `json:"visible"`
}

type GetTIDJSON200ApplicationJSON struct {
	ActionsSummary    []GetTIDJSON200ApplicationJSONActionsSummary  `json:"actions_summary"`
	Archetype         *string                                       `json:"archetype"`
	Archived          *bool                                         `json:"archived"`
	Bookmarked        *bool                                         `json:"bookmarked"`
	CategoryID        *int64                                        `json:"category_id"`
	ChunkSize         *int64                                        `json:"chunk_size"`
	Closed            *bool                                         `json:"closed"`
	CreatedAt         *string                                       `json:"created_at"`
	CurrentPostNumber *int64                                        `json:"current_post_number"`
	DeletedAt         *string                                       `json:"deleted_at"`
	DeletedBy         *string                                       `json:"deleted_by"`
	Details           *GetTIDJSON200ApplicationJSONDetails          `json:"details"`
	Draft             *string                                       `json:"draft"`
	DraftKey          *string                                       `json:"draft_key"`
	DraftSequence     *int64                                        `json:"draft_sequence"`
	FancyTitle        *string                                       `json:"fancy_title"`
	FeaturedLink      *string                                       `json:"featured_link"`
	HasDeleted        *bool                                         `json:"has_deleted"`
	HasSummary        *bool                                         `json:"has_summary"`
	HighestPostNumber *int64                                        `json:"highest_post_number"`
	ID                *int64                                        `json:"id"`
	ImageURL          *string                                       `json:"image_url"`
	LastPostedAt      *string                                       `json:"last_posted_at"`
	LikeCount         *int64                                        `json:"like_count"`
	MessageBusLastID  *int64                                        `json:"message_bus_last_id"`
	ParticipantCount  *int64                                        `json:"participant_count"`
	Pinned            *bool                                         `json:"pinned"`
	PinnedAt          *string                                       `json:"pinned_at"`
	PinnedGlobally    *bool                                         `json:"pinned_globally"`
	PinnedUntil       *string                                       `json:"pinned_until"`
	PostStream        *GetTIDJSON200ApplicationJSONPostStream       `json:"post_stream"`
	PostsCount        *int64                                        `json:"posts_count"`
	ReplyCount        *int64                                        `json:"reply_count"`
	ShowReadIndicator *bool                                         `json:"show_read_indicator"`
	Slug              *string                                       `json:"slug"`
	SuggestedTopics   []GetTIDJSON200ApplicationJSONSuggestedTopics `json:"suggested_topics"`
	Thumbnails        *string                                       `json:"thumbnails"`
	TimelineLookup    []interface{}                                 `json:"timeline_lookup"`
	Title             *string                                       `json:"title"`
	TopicTimer        *string                                       `json:"topic_timer"`
	Unpinned          *string                                       `json:"unpinned"`
	UserID            *int64                                        `json:"user_id"`
	Views             *int64                                        `json:"views"`
	Visible           *bool                                         `json:"visible"`
	WordCount         *int64                                        `json:"word_count"`
}

type GetTIDJSONResponse struct {
	ContentType                        string
	GetTIDJSON200ApplicationJSONObject *GetTIDJSON200ApplicationJSON
	StatusCode                         int64
}
