package operations

type GetPostsJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type GetPostsJSONRequest struct {
	Headers GetPostsJSONHeaders
}

type GetPostsJSON200ApplicationJSONLatestPostsActionsSummary struct {
	CanAct *bool  `json:"can_act"`
	ID     *int64 `json:"id"`
}

type GetPostsJSON200ApplicationJSONLatestPosts struct {
	ActionsSummary              []GetPostsJSON200ApplicationJSONLatestPostsActionsSummary `json:"actions_summary"`
	Admin                       *bool                                                     `json:"admin"`
	AvatarTemplate              *string                                                   `json:"avatar_template"`
	CanDelete                   *bool                                                     `json:"can_delete"`
	CanEdit                     *bool                                                     `json:"can_edit"`
	CanRecover                  *bool                                                     `json:"can_recover"`
	CanViewEditHistory          *bool                                                     `json:"can_view_edit_history"`
	CanWiki                     *bool                                                     `json:"can_wiki"`
	CategoryID                  *int64                                                    `json:"category_id"`
	Cooked                      *string                                                   `json:"cooked"`
	CreatedAt                   *string                                                   `json:"created_at"`
	DeletedAt                   *string                                                   `json:"deleted_at"`
	DisplayUsername             *string                                                   `json:"display_username"`
	EditReason                  *string                                                   `json:"edit_reason"`
	FlairBgColor                *string                                                   `json:"flair_bg_color"`
	FlairColor                  *string                                                   `json:"flair_color"`
	FlairName                   *string                                                   `json:"flair_name"`
	FlairURL                    *string                                                   `json:"flair_url"`
	Hidden                      *bool                                                     `json:"hidden"`
	ID                          *int64                                                    `json:"id"`
	IncomingLinkCount           *int64                                                    `json:"incoming_link_count"`
	Moderator                   *bool                                                     `json:"moderator"`
	Name                        *string                                                   `json:"name"`
	PostNumber                  *int64                                                    `json:"post_number"`
	PostType                    *int64                                                    `json:"post_type"`
	PrimaryGroupName            *string                                                   `json:"primary_group_name"`
	QuoteCount                  *int64                                                    `json:"quote_count"`
	Raw                         *string                                                   `json:"raw"`
	ReadersCount                *int64                                                    `json:"readers_count"`
	Reads                       *int64                                                    `json:"reads"`
	ReplyCount                  *int64                                                    `json:"reply_count"`
	ReplyToPostNumber           *string                                                   `json:"reply_to_post_number"`
	ReviewableID                *string                                                   `json:"reviewable_id"`
	ReviewableScoreCount        *int64                                                    `json:"reviewable_score_count"`
	ReviewableScorePendingCount *int64                                                    `json:"reviewable_score_pending_count"`
	Score                       *float64                                                  `json:"score"`
	Staff                       *bool                                                     `json:"staff"`
	TopicHTMLTitle              *string                                                   `json:"topic_html_title"`
	TopicID                     *int64                                                    `json:"topic_id"`
	TopicSlug                   *string                                                   `json:"topic_slug"`
	TopicTitle                  *string                                                   `json:"topic_title"`
	TrustLevel                  *int64                                                    `json:"trust_level"`
	UpdatedAt                   *string                                                   `json:"updated_at"`
	UserDeleted                 *bool                                                     `json:"user_deleted"`
	UserID                      *int64                                                    `json:"user_id"`
	UserTitle                   *string                                                   `json:"user_title"`
	Username                    *string                                                   `json:"username"`
	Version                     *int64                                                    `json:"version"`
	Wiki                        *bool                                                     `json:"wiki"`
	Yours                       *bool                                                     `json:"yours"`
}

type GetPostsJSON200ApplicationJSON struct {
	LatestPosts []GetPostsJSON200ApplicationJSONLatestPosts `json:"latest_posts"`
}

type GetPostsJSONResponse struct {
	ContentType                          string
	GetPostsJSON200ApplicationJSONObject *GetPostsJSON200ApplicationJSON
	StatusCode                           int64
}
