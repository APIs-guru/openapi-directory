package operations

type GetPostsJSONHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type GetPostsJSON200ApplicationJSONLatestPostsActionsSummary struct {
	CanAct *bool  `json:"can_act,omitempty"`
	ID     *int64 `json:"id,omitempty"`
}

type GetPostsJSON200ApplicationJSONLatestPosts struct {
	ActionsSummary              []GetPostsJSON200ApplicationJSONLatestPostsActionsSummary `json:"actions_summary,omitempty"`
	Admin                       *bool                                                     `json:"admin,omitempty"`
	AvatarTemplate              *string                                                   `json:"avatar_template,omitempty"`
	CanDelete                   *bool                                                     `json:"can_delete,omitempty"`
	CanEdit                     *bool                                                     `json:"can_edit,omitempty"`
	CanRecover                  *bool                                                     `json:"can_recover,omitempty"`
	CanViewEditHistory          *bool                                                     `json:"can_view_edit_history,omitempty"`
	CanWiki                     *bool                                                     `json:"can_wiki,omitempty"`
	CategoryID                  *int64                                                    `json:"category_id,omitempty"`
	Cooked                      *string                                                   `json:"cooked,omitempty"`
	CreatedAt                   *string                                                   `json:"created_at,omitempty"`
	DeletedAt                   *string                                                   `json:"deleted_at,omitempty"`
	DisplayUsername             *string                                                   `json:"display_username,omitempty"`
	EditReason                  *string                                                   `json:"edit_reason,omitempty"`
	FlairBgColor                *string                                                   `json:"flair_bg_color,omitempty"`
	FlairColor                  *string                                                   `json:"flair_color,omitempty"`
	FlairName                   *string                                                   `json:"flair_name,omitempty"`
	FlairURL                    *string                                                   `json:"flair_url,omitempty"`
	Hidden                      *bool                                                     `json:"hidden,omitempty"`
	ID                          *int64                                                    `json:"id,omitempty"`
	IncomingLinkCount           *int64                                                    `json:"incoming_link_count,omitempty"`
	Moderator                   *bool                                                     `json:"moderator,omitempty"`
	Name                        *string                                                   `json:"name,omitempty"`
	PostNumber                  *int64                                                    `json:"post_number,omitempty"`
	PostType                    *int64                                                    `json:"post_type,omitempty"`
	PrimaryGroupName            *string                                                   `json:"primary_group_name,omitempty"`
	QuoteCount                  *int64                                                    `json:"quote_count,omitempty"`
	Raw                         *string                                                   `json:"raw,omitempty"`
	ReadersCount                *int64                                                    `json:"readers_count,omitempty"`
	Reads                       *int64                                                    `json:"reads,omitempty"`
	ReplyCount                  *int64                                                    `json:"reply_count,omitempty"`
	ReplyToPostNumber           *string                                                   `json:"reply_to_post_number,omitempty"`
	ReviewableID                *string                                                   `json:"reviewable_id,omitempty"`
	ReviewableScoreCount        *int64                                                    `json:"reviewable_score_count,omitempty"`
	ReviewableScorePendingCount *int64                                                    `json:"reviewable_score_pending_count,omitempty"`
	Score                       *float64                                                  `json:"score,omitempty"`
	Staff                       *bool                                                     `json:"staff,omitempty"`
	TopicHTMLTitle              *string                                                   `json:"topic_html_title,omitempty"`
	TopicID                     *int64                                                    `json:"topic_id,omitempty"`
	TopicSlug                   *string                                                   `json:"topic_slug,omitempty"`
	TopicTitle                  *string                                                   `json:"topic_title,omitempty"`
	TrustLevel                  *int64                                                    `json:"trust_level,omitempty"`
	UpdatedAt                   *string                                                   `json:"updated_at,omitempty"`
	UserDeleted                 *bool                                                     `json:"user_deleted,omitempty"`
	UserID                      *int64                                                    `json:"user_id,omitempty"`
	UserTitle                   *string                                                   `json:"user_title,omitempty"`
	Username                    *string                                                   `json:"username,omitempty"`
	Version                     *int64                                                    `json:"version,omitempty"`
	Wiki                        *bool                                                     `json:"wiki,omitempty"`
	Yours                       *bool                                                     `json:"yours,omitempty"`
}

type GetPostsJSON200ApplicationJSON struct {
	LatestPosts []GetPostsJSON200ApplicationJSONLatestPosts `json:"latest_posts,omitempty"`
}

type GetPostsJSONRequest struct {
	Headers GetPostsJSONHeaders
}

type GetPostsJSONResponse struct {
	ContentType                          string
	GetPostsJSON200ApplicationJSONObject *GetPostsJSON200ApplicationJSON
	StatusCode                           int64
}
