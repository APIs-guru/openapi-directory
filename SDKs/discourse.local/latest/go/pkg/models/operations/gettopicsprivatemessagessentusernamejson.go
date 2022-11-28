package operations

type GetTopicsPrivateMessagesSentUsernameJSONPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopicsPosters struct {
	Description    *string `json:"description,omitempty"`
	Extras         *string `json:"extras,omitempty"`
	PrimaryGroupID *string `json:"primary_group_id,omitempty"`
	UserID         *int64  `json:"user_id,omitempty"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopics struct {
	AllowedUserCount   *int64                                                                             `json:"allowed_user_count,omitempty"`
	Archetype          *string                                                                            `json:"archetype,omitempty"`
	Archived           *bool                                                                              `json:"archived,omitempty"`
	Bookmarked         *bool                                                                              `json:"bookmarked,omitempty"`
	Bumped             *bool                                                                              `json:"bumped,omitempty"`
	BumpedAt           *string                                                                            `json:"bumped_at,omitempty"`
	CategoryID         *string                                                                            `json:"category_id,omitempty"`
	Closed             *bool                                                                              `json:"closed,omitempty"`
	CreatedAt          *string                                                                            `json:"created_at,omitempty"`
	FancyTitle         *string                                                                            `json:"fancy_title,omitempty"`
	FeaturedLink       *string                                                                            `json:"featured_link,omitempty"`
	HasSummary         *bool                                                                              `json:"has_summary,omitempty"`
	HighestPostNumber  *int64                                                                             `json:"highest_post_number,omitempty"`
	ID                 *int64                                                                             `json:"id,omitempty"`
	ImageURL           *string                                                                            `json:"image_url,omitempty"`
	LastPostedAt       *string                                                                            `json:"last_posted_at,omitempty"`
	LastPosterUsername *string                                                                            `json:"last_poster_username,omitempty"`
	LastReadPostNumber *int64                                                                             `json:"last_read_post_number,omitempty"`
	LikeCount          *int64                                                                             `json:"like_count,omitempty"`
	Liked              *bool                                                                              `json:"liked,omitempty"`
	NotificationLevel  *int64                                                                             `json:"notification_level,omitempty"`
	Participants       []interface{}                                                                      `json:"participants,omitempty"`
	Pinned             *bool                                                                              `json:"pinned,omitempty"`
	PinnedGlobally     *bool                                                                              `json:"pinned_globally,omitempty"`
	Posters            []GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopicsPosters `json:"posters,omitempty"`
	PostsCount         *int64                                                                             `json:"posts_count,omitempty"`
	ReplyCount         *int64                                                                             `json:"reply_count,omitempty"`
	Slug               *string                                                                            `json:"slug,omitempty"`
	Title              *string                                                                            `json:"title,omitempty"`
	Unpinned           *string                                                                            `json:"unpinned,omitempty"`
	UnreadPosts        *int64                                                                             `json:"unread_posts,omitempty"`
	Unseen             *bool                                                                              `json:"unseen,omitempty"`
	Views              *int64                                                                             `json:"views,omitempty"`
	Visible            *bool                                                                              `json:"visible,omitempty"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicList struct {
	CanCreateTopic *bool                                                                       `json:"can_create_topic,omitempty"`
	Draft          *string                                                                     `json:"draft,omitempty"`
	DraftKey       *string                                                                     `json:"draft_key,omitempty"`
	DraftSequence  *int64                                                                      `json:"draft_sequence,omitempty"`
	PerPage        *int64                                                                      `json:"per_page,omitempty"`
	Topics         []GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopics `json:"topics,omitempty"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONUsers struct {
	AvatarTemplate *string `json:"avatar_template,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	Username       *string `json:"username,omitempty"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSON struct {
	PrimaryGroups []interface{}                                                        `json:"primary_groups,omitempty"`
	TopicList     *GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicList `json:"topic_list,omitempty"`
	Users         []GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONUsers    `json:"users,omitempty"`
}

type GetTopicsPrivateMessagesSentUsernameJSONRequest struct {
	PathParams GetTopicsPrivateMessagesSentUsernameJSONPathParams
}

type GetTopicsPrivateMessagesSentUsernameJSONResponse struct {
	ContentType                                                      string
	GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONObject *GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSON
	StatusCode                                                       int64
}
