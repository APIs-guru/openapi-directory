package operations

type PostPostActionsJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PostPostActionsJSONRequestBody struct {
	FlagTopic        *bool `json:"flag_topic,omitempty"`
	ID               int64 `json:"id"`
	PostActionTypeID int64 `json:"post_action_type_id"`
}

type PostPostActionsJSONRequest struct {
	Headers PostPostActionsJSONHeaders
	Request *PostPostActionsJSONRequestBody `request:"mediaType=application/json"`
}

type PostPostActionsJSON200ApplicationJSONActionsSummary struct {
	Acted   *bool  `json:"acted,omitempty"`
	CanUndo *bool  `json:"can_undo,omitempty"`
	Count   *int64 `json:"count,omitempty"`
	ID      *int64 `json:"id,omitempty"`
}

type PostPostActionsJSON200ApplicationJSON struct {
	ActionsSummary              []PostPostActionsJSON200ApplicationJSONActionsSummary `json:"actions_summary,omitempty"`
	Admin                       *bool                                                 `json:"admin,omitempty"`
	AvatarTemplate              *string                                               `json:"avatar_template,omitempty"`
	CanDelete                   *bool                                                 `json:"can_delete,omitempty"`
	CanEdit                     *bool                                                 `json:"can_edit,omitempty"`
	CanRecover                  *bool                                                 `json:"can_recover,omitempty"`
	CanViewEditHistory          *bool                                                 `json:"can_view_edit_history,omitempty"`
	CanWiki                     *bool                                                 `json:"can_wiki,omitempty"`
	Cooked                      *string                                               `json:"cooked,omitempty"`
	CreatedAt                   *string                                               `json:"created_at,omitempty"`
	DeletedAt                   *string                                               `json:"deleted_at,omitempty"`
	DisplayUsername             *string                                               `json:"display_username,omitempty"`
	EditReason                  *string                                               `json:"edit_reason,omitempty"`
	FlairBgColor                *string                                               `json:"flair_bg_color,omitempty"`
	FlairColor                  *string                                               `json:"flair_color,omitempty"`
	FlairName                   *string                                               `json:"flair_name,omitempty"`
	FlairURL                    *string                                               `json:"flair_url,omitempty"`
	Hidden                      *bool                                                 `json:"hidden,omitempty"`
	ID                          *int64                                                `json:"id,omitempty"`
	IncomingLinkCount           *int64                                                `json:"incoming_link_count,omitempty"`
	Moderator                   *bool                                                 `json:"moderator,omitempty"`
	Name                        *string                                               `json:"name,omitempty"`
	Notice                      map[string]interface{}                                `json:"notice,omitempty"`
	PostNumber                  *int64                                                `json:"post_number,omitempty"`
	PostType                    *int64                                                `json:"post_type,omitempty"`
	PrimaryGroupName            *string                                               `json:"primary_group_name,omitempty"`
	QuoteCount                  *int64                                                `json:"quote_count,omitempty"`
	ReadersCount                *int64                                                `json:"readers_count,omitempty"`
	Reads                       *int64                                                `json:"reads,omitempty"`
	ReplyCount                  *int64                                                `json:"reply_count,omitempty"`
	ReplyToPostNumber           *string                                               `json:"reply_to_post_number,omitempty"`
	ReviewableID                *string                                               `json:"reviewable_id,omitempty"`
	ReviewableScoreCount        *int64                                                `json:"reviewable_score_count,omitempty"`
	ReviewableScorePendingCount *int64                                                `json:"reviewable_score_pending_count,omitempty"`
	Score                       *float64                                              `json:"score,omitempty"`
	Staff                       *bool                                                 `json:"staff,omitempty"`
	TopicID                     *int64                                                `json:"topic_id,omitempty"`
	TopicSlug                   *string                                               `json:"topic_slug,omitempty"`
	TrustLevel                  *int64                                                `json:"trust_level,omitempty"`
	UpdatedAt                   *string                                               `json:"updated_at,omitempty"`
	UserDeleted                 *bool                                                 `json:"user_deleted,omitempty"`
	UserID                      *int64                                                `json:"user_id,omitempty"`
	UserTitle                   *string                                               `json:"user_title,omitempty"`
	Username                    *string                                               `json:"username,omitempty"`
	Version                     *int64                                                `json:"version,omitempty"`
	Wiki                        *bool                                                 `json:"wiki,omitempty"`
	Yours                       *bool                                                 `json:"yours,omitempty"`
}

type PostPostActionsJSONResponse struct {
	ContentType                                 string
	PostPostActionsJSON200ApplicationJSONObject *PostPostActionsJSON200ApplicationJSON
	StatusCode                                  int64
}
