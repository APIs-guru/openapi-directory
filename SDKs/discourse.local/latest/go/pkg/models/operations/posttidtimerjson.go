package operations

type PostTIDTimerJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostTIDTimerJSONHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type PostTIDTimerJSONRequestBody struct {
	BasedOnLastPost *bool   `json:"based_on_last_post,omitempty"`
	CategoryID      *int64  `json:"category_id,omitempty"`
	StatusType      *string `json:"status_type,omitempty"`
	Time            *string `json:"time,omitempty"`
}

type PostTIDTimerJSONRequest struct {
	PathParams PostTIDTimerJSONPathParams
	Headers    PostTIDTimerJSONHeaders
	Request    *PostTIDTimerJSONRequestBody `request:"mediaType=application/json"`
}

type PostTIDTimerJSON200ApplicationJSON struct {
	BasedOnLastPost *bool   `json:"based_on_last_post,omitempty"`
	CategoryID      *string `json:"category_id,omitempty"`
	Closed          *bool   `json:"closed,omitempty"`
	Duration        *string `json:"duration,omitempty"`
	ExecuteAt       *string `json:"execute_at,omitempty"`
	Success         *string `json:"success,omitempty"`
}

type PostTIDTimerJSONResponse struct {
	ContentType                              string
	PostTIDTimerJSON200ApplicationJSONObject *PostTIDTimerJSON200ApplicationJSON
	StatusCode                               int64
}
