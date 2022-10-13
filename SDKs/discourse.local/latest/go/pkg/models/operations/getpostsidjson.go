package operations

type GetPostsIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPostsIDJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type GetPostsIDJSONRequest struct {
	PathParams GetPostsIDJSONPathParams
	Headers    GetPostsIDJSONHeaders
}

type GetPostsIDJSON200ApplicationJSONActionsSummary struct {
	CanAct *bool  `json:"can_act"`
	ID     *int64 `json:"id"`
}

type GetPostsIDJSON200ApplicationJSON struct {
	ActionsSummary              []GetPostsIDJSON200ApplicationJSONActionsSummary `json:"actions_summary"`
	Admin                       *bool                                            `json:"admin"`
	AvatarTemplate              *string                                          `json:"avatar_template"`
	CanDelete                   *bool                                            `json:"can_delete"`
	CanEdit                     *bool                                            `json:"can_edit"`
	CanRecover                  *bool                                            `json:"can_recover"`
	CanViewEditHistory          *bool                                            `json:"can_view_edit_history"`
	CanWiki                     *bool                                            `json:"can_wiki"`
	Cooked                      *string                                          `json:"cooked"`
	CreatedAt                   *string                                          `json:"created_at"`
	DeletedAt                   *string                                          `json:"deleted_at"`
	DisplayUsername             *string                                          `json:"display_username"`
	EditReason                  *string                                          `json:"edit_reason"`
	FlairBgColor                *string                                          `json:"flair_bg_color"`
	FlairColor                  *string                                          `json:"flair_color"`
	FlairName                   *string                                          `json:"flair_name"`
	FlairURL                    *string                                          `json:"flair_url"`
	Hidden                      *bool                                            `json:"hidden"`
	ID                          *int64                                           `json:"id"`
	IncomingLinkCount           *int64                                           `json:"incoming_link_count"`
	Moderator                   *bool                                            `json:"moderator"`
	Name                        *string                                          `json:"name"`
	PostNumber                  *int64                                           `json:"post_number"`
	PostType                    *int64                                           `json:"post_type"`
	PrimaryGroupName            *string                                          `json:"primary_group_name"`
	QuoteCount                  *int64                                           `json:"quote_count"`
	Raw                         *string                                          `json:"raw"`
	ReadersCount                *int64                                           `json:"readers_count"`
	Reads                       *int64                                           `json:"reads"`
	ReplyCount                  *int64                                           `json:"reply_count"`
	ReplyToPostNumber           *string                                          `json:"reply_to_post_number"`
	ReviewableID                *string                                          `json:"reviewable_id"`
	ReviewableScoreCount        *int64                                           `json:"reviewable_score_count"`
	ReviewableScorePendingCount *int64                                           `json:"reviewable_score_pending_count"`
	Score                       *int64                                           `json:"score"`
	Staff                       *bool                                            `json:"staff"`
	TopicID                     *int64                                           `json:"topic_id"`
	TopicSlug                   *string                                          `json:"topic_slug"`
	TrustLevel                  *int64                                           `json:"trust_level"`
	UpdatedAt                   *string                                          `json:"updated_at"`
	UserDeleted                 *bool                                            `json:"user_deleted"`
	UserID                      *int64                                           `json:"user_id"`
	UserTitle                   *string                                          `json:"user_title"`
	Username                    *string                                          `json:"username"`
	Version                     *int64                                           `json:"version"`
	Wiki                        *bool                                            `json:"wiki"`
	Yours                       *bool                                            `json:"yours"`
}

type GetPostsIDJSONResponse struct {
	ContentType                            string
	GetPostsIDJSON200ApplicationJSONObject *GetPostsIDJSON200ApplicationJSON
	StatusCode                             int64
}
