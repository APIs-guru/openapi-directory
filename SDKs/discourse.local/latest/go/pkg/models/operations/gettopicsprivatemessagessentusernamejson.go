package operations

type GetTopicsPrivateMessagesSentUsernameJSONPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTopicsPrivateMessagesSentUsernameJSONRequest struct {
	PathParams GetTopicsPrivateMessagesSentUsernameJSONPathParams
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopicsPosters struct {
	Description    *string `json:"description"`
	Extras         *string `json:"extras"`
	PrimaryGroupID *string `json:"primary_group_id"`
	UserID         *int64  `json:"user_id"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopics struct {
	AllowedUserCount   *int64                                                                             `json:"allowed_user_count"`
	Archetype          *string                                                                            `json:"archetype"`
	Archived           *bool                                                                              `json:"archived"`
	Bookmarked         *bool                                                                              `json:"bookmarked"`
	Bumped             *bool                                                                              `json:"bumped"`
	BumpedAt           *string                                                                            `json:"bumped_at"`
	CategoryID         *string                                                                            `json:"category_id"`
	Closed             *bool                                                                              `json:"closed"`
	CreatedAt          *string                                                                            `json:"created_at"`
	FancyTitle         *string                                                                            `json:"fancy_title"`
	FeaturedLink       *string                                                                            `json:"featured_link"`
	HasSummary         *bool                                                                              `json:"has_summary"`
	HighestPostNumber  *int64                                                                             `json:"highest_post_number"`
	ID                 *int64                                                                             `json:"id"`
	ImageURL           *string                                                                            `json:"image_url"`
	LastPostedAt       *string                                                                            `json:"last_posted_at"`
	LastPosterUsername *string                                                                            `json:"last_poster_username"`
	LastReadPostNumber *int64                                                                             `json:"last_read_post_number"`
	LikeCount          *int64                                                                             `json:"like_count"`
	Liked              *bool                                                                              `json:"liked"`
	NotificationLevel  *int64                                                                             `json:"notification_level"`
	Participants       []interface{}                                                                      `json:"participants"`
	Pinned             *bool                                                                              `json:"pinned"`
	PinnedGlobally     *bool                                                                              `json:"pinned_globally"`
	Posters            []GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopicsPosters `json:"posters"`
	PostsCount         *int64                                                                             `json:"posts_count"`
	ReplyCount         *int64                                                                             `json:"reply_count"`
	Slug               *string                                                                            `json:"slug"`
	Title              *string                                                                            `json:"title"`
	Unpinned           *string                                                                            `json:"unpinned"`
	UnreadPosts        *int64                                                                             `json:"unread_posts"`
	Unseen             *bool                                                                              `json:"unseen"`
	Views              *int64                                                                             `json:"views"`
	Visible            *bool                                                                              `json:"visible"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicList struct {
	CanCreateTopic *bool                                                                       `json:"can_create_topic"`
	Draft          *string                                                                     `json:"draft"`
	DraftKey       *string                                                                     `json:"draft_key"`
	DraftSequence  *int64                                                                      `json:"draft_sequence"`
	PerPage        *int64                                                                      `json:"per_page"`
	Topics         []GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicListTopics `json:"topics"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONUsers struct {
	AvatarTemplate *string `json:"avatar_template"`
	ID             *int64  `json:"id"`
	Name           *string `json:"name"`
	Username       *string `json:"username"`
}

type GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSON struct {
	PrimaryGroups []interface{}                                                        `json:"primary_groups"`
	TopicList     *GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONTopicList `json:"topic_list"`
	Users         []GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONUsers    `json:"users"`
}

type GetTopicsPrivateMessagesSentUsernameJSONResponse struct {
	ContentType                                                      string
	GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSONObject *GetTopicsPrivateMessagesSentUsernameJSON200ApplicationJSON
	StatusCode                                                       int64
}
