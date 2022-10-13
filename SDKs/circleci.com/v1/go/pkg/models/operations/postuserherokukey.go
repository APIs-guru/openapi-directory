package operations

type PostUserHerokuKey403ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostUserHerokuKeyResponse struct {
	ContentType                               string
	PostUserHerokuKey403ApplicationJSONObject *PostUserHerokuKey403ApplicationJSON
	StatusCode                                int64
}
