package operations

type PostInvitesJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PostInvitesJSONRequestBody struct {
	CustomMessage         *string `json:"custom_message"`
	Email                 *string `json:"email"`
	ExpiresAt             *string `json:"expires_at"`
	GroupID               *int64  `json:"group_id"`
	GroupNames            *string `json:"group_names"`
	MaxRedemptionsAllowed *int64  `json:"max_redemptions_allowed"`
	SkipEmail             *bool   `json:"skip_email"`
	TopicID               *int64  `json:"topic_id"`
}

type PostInvitesJSONRequest struct {
	Headers PostInvitesJSONHeaders
	Request *PostInvitesJSONRequestBody `request:"mediaType=application/json"`
}

type PostInvitesJSON200ApplicationJSON struct {
	CreatedAt     *string       `json:"created_at"`
	CustomMessage *string       `json:"custom_message"`
	Email         *string       `json:"email"`
	Emailed       *bool         `json:"emailed"`
	Expired       *bool         `json:"expired"`
	ExpiresAt     *string       `json:"expires_at"`
	Groups        []interface{} `json:"groups"`
	ID            *int64        `json:"id"`
	Link          *string       `json:"link"`
	Topics        []interface{} `json:"topics"`
	UpdatedAt     *string       `json:"updated_at"`
}

type PostInvitesJSONResponse struct {
	ContentType                             string
	PostInvitesJSON200ApplicationJSONObject *PostInvitesJSON200ApplicationJSON
	StatusCode                              int64
}
