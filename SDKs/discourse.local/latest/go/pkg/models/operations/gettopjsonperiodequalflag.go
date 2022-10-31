package operations

type GetTopJSONPeriodEqualFlagPathParams struct {
	Flag string `pathParam:"style=simple,explode=false,name=flag"`
}

type GetTopJSONPeriodEqualFlagHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type GetTopJSONPeriodEqualFlagRequest struct {
	PathParams GetTopJSONPeriodEqualFlagPathParams
	Headers    GetTopJSONPeriodEqualFlagHeaders
}

type GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopicsPosters struct {
	Description    *string `json:"description,omitempty"`
	Extras         *string `json:"extras,omitempty"`
	PrimaryGroupID *string `json:"primary_group_id,omitempty"`
	UserID         *int64  `json:"user_id,omitempty"`
}

type GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopics struct {
	Archetype          *string                                                             `json:"archetype,omitempty"`
	Archived           *bool                                                               `json:"archived,omitempty"`
	Bookmarked         *bool                                                               `json:"bookmarked,omitempty"`
	Bumped             *bool                                                               `json:"bumped,omitempty"`
	BumpedAt           *string                                                             `json:"bumped_at,omitempty"`
	CategoryID         *int64                                                              `json:"category_id,omitempty"`
	Closed             *bool                                                               `json:"closed,omitempty"`
	CreatedAt          *string                                                             `json:"created_at,omitempty"`
	FancyTitle         *string                                                             `json:"fancy_title,omitempty"`
	FeaturedLink       *string                                                             `json:"featured_link,omitempty"`
	HasSummary         *bool                                                               `json:"has_summary,omitempty"`
	HighestPostNumber  *int64                                                              `json:"highest_post_number,omitempty"`
	ID                 *int64                                                              `json:"id,omitempty"`
	ImageURL           *string                                                             `json:"image_url,omitempty"`
	LastPostedAt       *string                                                             `json:"last_posted_at,omitempty"`
	LastPosterUsername *string                                                             `json:"last_poster_username,omitempty"`
	LastReadPostNumber *int64                                                              `json:"last_read_post_number,omitempty"`
	LikeCount          *int64                                                              `json:"like_count,omitempty"`
	Liked              *bool                                                               `json:"liked,omitempty"`
	NotificationLevel  *int64                                                              `json:"notification_level,omitempty"`
	OpLikeCount        *int64                                                              `json:"op_like_count,omitempty"`
	Pinned             *bool                                                               `json:"pinned,omitempty"`
	PinnedGlobally     *bool                                                               `json:"pinned_globally,omitempty"`
	Posters            []GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopicsPosters `json:"posters,omitempty"`
	PostsCount         *int64                                                              `json:"posts_count,omitempty"`
	ReplyCount         *int64                                                              `json:"reply_count,omitempty"`
	Slug               *string                                                             `json:"slug,omitempty"`
	Title              *string                                                             `json:"title,omitempty"`
	Unpinned           *bool                                                               `json:"unpinned,omitempty"`
	UnreadPosts        *int64                                                              `json:"unread_posts,omitempty"`
	Unseen             *bool                                                               `json:"unseen,omitempty"`
	Views              *int64                                                              `json:"views,omitempty"`
	Visible            *bool                                                               `json:"visible,omitempty"`
}

type GetTopJSONPeriodEqualFlag200ApplicationJSONTopicList struct {
	CanCreateTopic *bool                                                        `json:"can_create_topic,omitempty"`
	Draft          *string                                                      `json:"draft,omitempty"`
	DraftKey       *string                                                      `json:"draft_key,omitempty"`
	DraftSequence  *int64                                                       `json:"draft_sequence,omitempty"`
	ForPeriod      *string                                                      `json:"for_period,omitempty"`
	PerPage        *int64                                                       `json:"per_page,omitempty"`
	Topics         []GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopics `json:"topics,omitempty"`
}

type GetTopJSONPeriodEqualFlag200ApplicationJSONUsers struct {
	AvatarTemplate *string `json:"avatar_template,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	Username       *string `json:"username,omitempty"`
}

type GetTopJSONPeriodEqualFlag200ApplicationJSON struct {
	PrimaryGroups []interface{}                                         `json:"primary_groups,omitempty"`
	TopicList     *GetTopJSONPeriodEqualFlag200ApplicationJSONTopicList `json:"topic_list,omitempty"`
	Users         []GetTopJSONPeriodEqualFlag200ApplicationJSONUsers    `json:"users,omitempty"`
}

type GetTopJSONPeriodEqualFlagResponse struct {
	ContentType                                       string
	GetTopJSONPeriodEqualFlag200ApplicationJSONObject *GetTopJSONPeriodEqualFlag200ApplicationJSON
	StatusCode                                        int64
}
