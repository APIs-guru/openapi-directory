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
	CanAct *bool  `json:"can_act,omitempty"`
	Count  *int64 `json:"count,omitempty"`
	Hidden *bool  `json:"hidden,omitempty"`
	ID     *int64 `json:"id,omitempty"`
}

type GetTIDJSON200ApplicationJSONDetailsCreatedBy struct {
	AvatarTemplate *string `json:"avatar_template,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	Username       *string `json:"username,omitempty"`
}

type GetTIDJSON200ApplicationJSONDetailsLastPoster struct {
	AvatarTemplate *string `json:"avatar_template,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	Username       *string `json:"username,omitempty"`
}

type GetTIDJSON200ApplicationJSONDetailsParticipants struct {
	AvatarTemplate   *string `json:"avatar_template,omitempty"`
	FlairBgColor     *string `json:"flair_bg_color,omitempty"`
	FlairColor       *string `json:"flair_color,omitempty"`
	FlairName        *string `json:"flair_name,omitempty"`
	FlairURL         *string `json:"flair_url,omitempty"`
	ID               *int64  `json:"id,omitempty"`
	Name             *string `json:"name,omitempty"`
	PostCount        *int64  `json:"post_count,omitempty"`
	PrimaryGroupName *string `json:"primary_group_name,omitempty"`
	Username         *string `json:"username,omitempty"`
}

type GetTIDJSON200ApplicationJSONDetails struct {
	CanConvertTopic       *bool                                             `json:"can_convert_topic,omitempty"`
	CanCreatePost         *bool                                             `json:"can_create_post,omitempty"`
	CanDelete             *bool                                             `json:"can_delete,omitempty"`
	CanEdit               *bool                                             `json:"can_edit,omitempty"`
	CanFlagTopic          *bool                                             `json:"can_flag_topic,omitempty"`
	CanMovePosts          *bool                                             `json:"can_move_posts,omitempty"`
	CanRemoveAllowedUsers *bool                                             `json:"can_remove_allowed_users,omitempty"`
	CanRemoveSelfID       *int64                                            `json:"can_remove_self_id,omitempty"`
	CanReplyAsNewTopic    *bool                                             `json:"can_reply_as_new_topic,omitempty"`
	CanReviewTopic        *bool                                             `json:"can_review_topic,omitempty"`
	CreatedBy             *GetTIDJSON200ApplicationJSONDetailsCreatedBy     `json:"created_by,omitempty"`
	LastPoster            *GetTIDJSON200ApplicationJSONDetailsLastPoster    `json:"last_poster,omitempty"`
	NotificationLevel     *int64                                            `json:"notification_level,omitempty"`
	Participants          []GetTIDJSON200ApplicationJSONDetailsParticipants `json:"participants,omitempty"`
}

type GetTIDJSON200ApplicationJSONPostStreamPostsActionsSummary struct {
	CanAct *bool  `json:"can_act,omitempty"`
	ID     *int64 `json:"id,omitempty"`
}

type GetTIDJSON200ApplicationJSONPostStreamPostsLinkCounts struct {
	Clicks     *int64  `json:"clicks,omitempty"`
	Internal   *bool   `json:"internal,omitempty"`
	Reflection *bool   `json:"reflection,omitempty"`
	URL        *string `json:"url,omitempty"`
}

type GetTIDJSON200ApplicationJSONPostStreamPosts struct {
	ActionsSummary              []GetTIDJSON200ApplicationJSONPostStreamPostsActionsSummary `json:"actions_summary,omitempty"`
	Admin                       *bool                                                       `json:"admin,omitempty"`
	AvatarTemplate              *string                                                     `json:"avatar_template,omitempty"`
	CanDelete                   *bool                                                       `json:"can_delete,omitempty"`
	CanEdit                     *bool                                                       `json:"can_edit,omitempty"`
	CanRecover                  *bool                                                       `json:"can_recover,omitempty"`
	CanViewEditHistory          *bool                                                       `json:"can_view_edit_history,omitempty"`
	CanWiki                     *bool                                                       `json:"can_wiki,omitempty"`
	Cooked                      *string                                                     `json:"cooked,omitempty"`
	CreatedAt                   *string                                                     `json:"created_at,omitempty"`
	DeletedAt                   *string                                                     `json:"deleted_at,omitempty"`
	DisplayUsername             *string                                                     `json:"display_username,omitempty"`
	EditReason                  *string                                                     `json:"edit_reason,omitempty"`
	FlairBgColor                *string                                                     `json:"flair_bg_color,omitempty"`
	FlairColor                  *string                                                     `json:"flair_color,omitempty"`
	FlairName                   *string                                                     `json:"flair_name,omitempty"`
	FlairURL                    *string                                                     `json:"flair_url,omitempty"`
	Hidden                      *bool                                                       `json:"hidden,omitempty"`
	ID                          *int64                                                      `json:"id,omitempty"`
	IncomingLinkCount           *int64                                                      `json:"incoming_link_count,omitempty"`
	LinkCounts                  []GetTIDJSON200ApplicationJSONPostStreamPostsLinkCounts     `json:"link_counts,omitempty"`
	Moderator                   *bool                                                       `json:"moderator,omitempty"`
	Name                        *string                                                     `json:"name,omitempty"`
	PostNumber                  *int64                                                      `json:"post_number,omitempty"`
	PostType                    *int64                                                      `json:"post_type,omitempty"`
	PrimaryGroupName            *string                                                     `json:"primary_group_name,omitempty"`
	QuoteCount                  *int64                                                      `json:"quote_count,omitempty"`
	Read                        *bool                                                       `json:"read,omitempty"`
	ReadersCount                *int64                                                      `json:"readers_count,omitempty"`
	Reads                       *int64                                                      `json:"reads,omitempty"`
	ReplyCount                  *int64                                                      `json:"reply_count,omitempty"`
	ReplyToPostNumber           *string                                                     `json:"reply_to_post_number,omitempty"`
	ReviewableID                *int64                                                      `json:"reviewable_id,omitempty"`
	ReviewableScoreCount        *int64                                                      `json:"reviewable_score_count,omitempty"`
	ReviewableScorePendingCount *int64                                                      `json:"reviewable_score_pending_count,omitempty"`
	Score                       *float64                                                    `json:"score,omitempty"`
	Staff                       *bool                                                       `json:"staff,omitempty"`
	TopicID                     *int64                                                      `json:"topic_id,omitempty"`
	TopicSlug                   *string                                                     `json:"topic_slug,omitempty"`
	TrustLevel                  *int64                                                      `json:"trust_level,omitempty"`
	UpdatedAt                   *string                                                     `json:"updated_at,omitempty"`
	UserDeleted                 *bool                                                       `json:"user_deleted,omitempty"`
	UserID                      *int64                                                      `json:"user_id,omitempty"`
	UserTitle                   *string                                                     `json:"user_title,omitempty"`
	Username                    *string                                                     `json:"username,omitempty"`
	Version                     *int64                                                      `json:"version,omitempty"`
	Wiki                        *bool                                                       `json:"wiki,omitempty"`
	Yours                       *bool                                                       `json:"yours,omitempty"`
}

type GetTIDJSON200ApplicationJSONPostStream struct {
	Posts  []GetTIDJSON200ApplicationJSONPostStreamPosts `json:"posts,omitempty"`
	Stream []interface{}                                 `json:"stream,omitempty"`
}

type GetTIDJSON200ApplicationJSONSuggestedTopicsPostersUser struct {
	AvatarTemplate *string `json:"avatar_template,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	Username       *string `json:"username,omitempty"`
}

type GetTIDJSON200ApplicationJSONSuggestedTopicsPosters struct {
	Description *string                                                 `json:"description,omitempty"`
	Extras      *string                                                 `json:"extras,omitempty"`
	User        *GetTIDJSON200ApplicationJSONSuggestedTopicsPostersUser `json:"user,omitempty"`
}

type GetTIDJSON200ApplicationJSONSuggestedTopics struct {
	Archetype          *string                                              `json:"archetype,omitempty"`
	Archived           *bool                                                `json:"archived,omitempty"`
	Bookmarked         *bool                                                `json:"bookmarked,omitempty"`
	Bumped             *bool                                                `json:"bumped,omitempty"`
	BumpedAt           *string                                              `json:"bumped_at,omitempty"`
	CategoryID         *int64                                               `json:"category_id,omitempty"`
	Closed             *bool                                                `json:"closed,omitempty"`
	CreatedAt          *string                                              `json:"created_at,omitempty"`
	FancyTitle         *string                                              `json:"fancy_title,omitempty"`
	FeaturedLink       *string                                              `json:"featured_link,omitempty"`
	HighestPostNumber  *int64                                               `json:"highest_post_number,omitempty"`
	ID                 *int64                                               `json:"id,omitempty"`
	ImageURL           *string                                              `json:"image_url,omitempty"`
	LastPostedAt       *string                                              `json:"last_posted_at,omitempty"`
	LastReadPostNumber *int64                                               `json:"last_read_post_number,omitempty"`
	LikeCount          *int64                                               `json:"like_count,omitempty"`
	Liked              *bool                                                `json:"liked,omitempty"`
	NotificationLevel  *int64                                               `json:"notification_level,omitempty"`
	Pinned             *bool                                                `json:"pinned,omitempty"`
	Posters            []GetTIDJSON200ApplicationJSONSuggestedTopicsPosters `json:"posters,omitempty"`
	PostsCount         *int64                                               `json:"posts_count,omitempty"`
	ReplyCount         *int64                                               `json:"reply_count,omitempty"`
	Slug               *string                                              `json:"slug,omitempty"`
	Title              *string                                              `json:"title,omitempty"`
	Unpinned           *bool                                                `json:"unpinned,omitempty"`
	UnreadPosts        *int64                                               `json:"unread_posts,omitempty"`
	Unseen             *bool                                                `json:"unseen,omitempty"`
	Views              *int64                                               `json:"views,omitempty"`
	Visible            *bool                                                `json:"visible,omitempty"`
}

type GetTIDJSON200ApplicationJSON struct {
	ActionsSummary    []GetTIDJSON200ApplicationJSONActionsSummary  `json:"actions_summary,omitempty"`
	Archetype         *string                                       `json:"archetype,omitempty"`
	Archived          *bool                                         `json:"archived,omitempty"`
	Bookmarked        *bool                                         `json:"bookmarked,omitempty"`
	CategoryID        *int64                                        `json:"category_id,omitempty"`
	ChunkSize         *int64                                        `json:"chunk_size,omitempty"`
	Closed            *bool                                         `json:"closed,omitempty"`
	CreatedAt         *string                                       `json:"created_at,omitempty"`
	CurrentPostNumber *int64                                        `json:"current_post_number,omitempty"`
	DeletedAt         *string                                       `json:"deleted_at,omitempty"`
	DeletedBy         *string                                       `json:"deleted_by,omitempty"`
	Details           *GetTIDJSON200ApplicationJSONDetails          `json:"details,omitempty"`
	Draft             *string                                       `json:"draft,omitempty"`
	DraftKey          *string                                       `json:"draft_key,omitempty"`
	DraftSequence     *int64                                        `json:"draft_sequence,omitempty"`
	FancyTitle        *string                                       `json:"fancy_title,omitempty"`
	FeaturedLink      *string                                       `json:"featured_link,omitempty"`
	HasDeleted        *bool                                         `json:"has_deleted,omitempty"`
	HasSummary        *bool                                         `json:"has_summary,omitempty"`
	HighestPostNumber *int64                                        `json:"highest_post_number,omitempty"`
	ID                *int64                                        `json:"id,omitempty"`
	ImageURL          *string                                       `json:"image_url,omitempty"`
	LastPostedAt      *string                                       `json:"last_posted_at,omitempty"`
	LikeCount         *int64                                        `json:"like_count,omitempty"`
	MessageBusLastID  *int64                                        `json:"message_bus_last_id,omitempty"`
	ParticipantCount  *int64                                        `json:"participant_count,omitempty"`
	Pinned            *bool                                         `json:"pinned,omitempty"`
	PinnedAt          *string                                       `json:"pinned_at,omitempty"`
	PinnedGlobally    *bool                                         `json:"pinned_globally,omitempty"`
	PinnedUntil       *string                                       `json:"pinned_until,omitempty"`
	PostStream        *GetTIDJSON200ApplicationJSONPostStream       `json:"post_stream,omitempty"`
	PostsCount        *int64                                        `json:"posts_count,omitempty"`
	ReplyCount        *int64                                        `json:"reply_count,omitempty"`
	ShowReadIndicator *bool                                         `json:"show_read_indicator,omitempty"`
	Slug              *string                                       `json:"slug,omitempty"`
	SuggestedTopics   []GetTIDJSON200ApplicationJSONSuggestedTopics `json:"suggested_topics,omitempty"`
	Thumbnails        *string                                       `json:"thumbnails,omitempty"`
	TimelineLookup    []interface{}                                 `json:"timeline_lookup,omitempty"`
	Title             *string                                       `json:"title,omitempty"`
	TopicTimer        *string                                       `json:"topic_timer,omitempty"`
	Unpinned          *string                                       `json:"unpinned,omitempty"`
	UserID            *int64                                        `json:"user_id,omitempty"`
	Views             *int64                                        `json:"views,omitempty"`
	Visible           *bool                                         `json:"visible,omitempty"`
	WordCount         *int64                                        `json:"word_count,omitempty"`
}

type GetTIDJSONResponse struct {
	ContentType                        string
	GetTIDJSON200ApplicationJSONObject *GetTIDJSON200ApplicationJSON
	StatusCode                         int64
}
