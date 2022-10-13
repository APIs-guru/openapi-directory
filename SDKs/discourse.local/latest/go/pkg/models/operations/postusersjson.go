package operations

type PostUsersJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PostUsersJSONRequestBody struct {
	Active      *bool   `json:"active"`
	Approved    *bool   `json:"approved"`
	Email       string  `json:"email"`
	Name        string  `json:"name"`
	Password    string  `json:"password"`
	UserFields1 *string `json:"user_fields[1]"`
	Username    string  `json:"username"`
}

type PostUsersJSONRequest struct {
	Headers PostUsersJSONHeaders
	Request *PostUsersJSONRequestBody `request:"mediaType=application/json"`
}

type PostUsersJSON200ApplicationJSON struct {
	Active  *bool   `json:"active"`
	Message *string `json:"message"`
	Success *bool   `json:"success"`
	UserID  *int64  `json:"user_id"`
}

type PostUsersJSONResponse struct {
	ContentType                           string
	PostUsersJSON200ApplicationJSONObject *PostUsersJSON200ApplicationJSON
	StatusCode                            int64
}
