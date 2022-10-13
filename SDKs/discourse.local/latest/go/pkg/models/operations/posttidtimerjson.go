package operations

type PostTIDTimerJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostTIDTimerJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PostTIDTimerJSONRequestBody struct {
	BasedOnLastPost *bool   `json:"based_on_last_post"`
	CategoryID      *int64  `json:"category_id"`
	StatusType      *string `json:"status_type"`
	Time            *string `json:"time"`
}

type PostTIDTimerJSONRequest struct {
	PathParams PostTIDTimerJSONPathParams
	Headers    PostTIDTimerJSONHeaders
	Request    *PostTIDTimerJSONRequestBody `request:"mediaType=application/json"`
}

type PostTIDTimerJSON200ApplicationJSON struct {
	BasedOnLastPost *bool   `json:"based_on_last_post"`
	CategoryID      *string `json:"category_id"`
	Closed          *bool   `json:"closed"`
	Duration        *string `json:"duration"`
	ExecuteAt       *string `json:"execute_at"`
	Success         *string `json:"success"`
}

type PostTIDTimerJSONResponse struct {
	ContentType                              string
	PostTIDTimerJSON200ApplicationJSONObject *PostTIDTimerJSON200ApplicationJSON
	StatusCode                               int64
}
