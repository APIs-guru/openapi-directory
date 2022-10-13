package operations

type PostPostActionsJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PostPostActionsJSONRequestBody struct {
	FlagTopic        *bool `json:"flag_topic"`
	ID               int64 `json:"id"`
	PostActionTypeID int64 `json:"post_action_type_id"`
}

type PostPostActionsJSONRequest struct {
	Headers PostPostActionsJSONHeaders
	Request *PostPostActionsJSONRequestBody `request:"mediaType=application/json"`
}

type PostPostActionsJSON200ApplicationJSONActionsSummary struct {
	Acted   *bool  `json:"acted"`
	CanUndo *bool  `json:"can_undo"`
	Count   *int64 `json:"count"`
	ID      *int64 `json:"id"`
}

type PostPostActionsJSON200ApplicationJSON struct {
	ActionsSummary              []PostPostActionsJSON200ApplicationJSONActionsSummary `json:"actions_summary"`
	Admin                       *bool                                                 `json:"admin"`
	AvatarTemplate              *string                                               `json:"avatar_template"`
	CanDelete                   *bool                                                 `json:"can_delete"`
	CanEdit                     *bool                                                 `json:"can_edit"`
	CanRecover                  *bool                                                 `json:"can_recover"`
	CanViewEditHistory          *bool                                                 `json:"can_view_edit_history"`
	CanWiki                     *bool                                                 `json:"can_wiki"`
	Cooked                      *string                                               `json:"cooked"`
	CreatedAt                   *string                                               `json:"created_at"`
	DeletedAt                   *string                                               `json:"deleted_at"`
	DisplayUsername             *string                                               `json:"display_username"`
	EditReason                  *string                                               `json:"edit_reason"`
	FlairBgColor                *string                                               `json:"flair_bg_color"`
	FlairColor                  *string                                               `json:"flair_color"`
	FlairName                   *string                                               `json:"flair_name"`
	FlairURL                    *string                                               `json:"flair_url"`
	Hidden                      *bool                                                 `json:"hidden"`
	ID                          *int64                                                `json:"id"`
	IncomingLinkCount           *int64                                                `json:"incoming_link_count"`
	Moderator                   *bool                                                 `json:"moderator"`
	Name                        *string                                               `json:"name"`
	Notice                      map[string]interface{}                                `json:"notice"`
	PostNumber                  *int64                                                `json:"post_number"`
	PostType                    *int64                                                `json:"post_type"`
	PrimaryGroupName            *string                                               `json:"primary_group_name"`
	QuoteCount                  *int64                                                `json:"quote_count"`
	ReadersCount                *int64                                                `json:"readers_count"`
	Reads                       *int64                                                `json:"reads"`
	ReplyCount                  *int64                                                `json:"reply_count"`
	ReplyToPostNumber           *string                                               `json:"reply_to_post_number"`
	ReviewableID                *string                                               `json:"reviewable_id"`
	ReviewableScoreCount        *int64                                                `json:"reviewable_score_count"`
	ReviewableScorePendingCount *int64                                                `json:"reviewable_score_pending_count"`
	Score                       *float64                                              `json:"score"`
	Staff                       *bool                                                 `json:"staff"`
	TopicID                     *int64                                                `json:"topic_id"`
	TopicSlug                   *string                                               `json:"topic_slug"`
	TrustLevel                  *int64                                                `json:"trust_level"`
	UpdatedAt                   *string                                               `json:"updated_at"`
	UserDeleted                 *bool                                                 `json:"user_deleted"`
	UserID                      *int64                                                `json:"user_id"`
	UserTitle                   *string                                               `json:"user_title"`
	Username                    *string                                               `json:"username"`
	Version                     *int64                                                `json:"version"`
	Wiki                        *bool                                                 `json:"wiki"`
	Yours                       *bool                                                 `json:"yours"`
}

type PostPostActionsJSONResponse struct {
	ContentType                                 string
	PostPostActionsJSON200ApplicationJSONObject *PostPostActionsJSON200ApplicationJSON
	StatusCode                                  int64
}
