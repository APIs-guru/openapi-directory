package operations

type PostTIDInviteJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostTIDInviteJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PostTIDInviteJSONRequestBody struct {
	Email *string `json:"email,omitempty"`
	User  *string `json:"user,omitempty"`
}

type PostTIDInviteJSONRequest struct {
	PathParams PostTIDInviteJSONPathParams
	Headers    PostTIDInviteJSONHeaders
	Request    *PostTIDInviteJSONRequestBody `request:"mediaType=application/json"`
}

type PostTIDInviteJSON200ApplicationJSONUser struct {
	AvatarTemplate *string `json:"avatar_template,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
	Username       *string `json:"username,omitempty"`
}

type PostTIDInviteJSON200ApplicationJSON struct {
	User *PostTIDInviteJSON200ApplicationJSONUser `json:"user,omitempty"`
}

type PostTIDInviteJSONResponse struct {
	ContentType                               string
	PostTIDInviteJSON200ApplicationJSONObject *PostTIDInviteJSON200ApplicationJSON
	StatusCode                                int64
}
