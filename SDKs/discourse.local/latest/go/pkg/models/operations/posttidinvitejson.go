package operations

type PostTIDInviteJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostTIDInviteJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PostTIDInviteJSONRequestBody struct {
	Email *string `json:"email"`
	User  *string `json:"user"`
}

type PostTIDInviteJSONRequest struct {
	PathParams PostTIDInviteJSONPathParams
	Headers    PostTIDInviteJSONHeaders
	Request    *PostTIDInviteJSONRequestBody `request:"mediaType=application/json"`
}

type PostTIDInviteJSON200ApplicationJSONUser struct {
	AvatarTemplate *string `json:"avatar_template"`
	ID             *int64  `json:"id"`
	Name           *string `json:"name"`
	Username       *string `json:"username"`
}

type PostTIDInviteJSON200ApplicationJSON struct {
	User *PostTIDInviteJSON200ApplicationJSONUser `json:"user"`
}

type PostTIDInviteJSONResponse struct {
	ContentType                               string
	PostTIDInviteJSON200ApplicationJSONObject *PostTIDInviteJSON200ApplicationJSON
	StatusCode                                int64
}
