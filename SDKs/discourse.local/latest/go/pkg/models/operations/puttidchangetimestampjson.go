package operations

type PutTIDChangeTimestampJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTIDChangeTimestampJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PutTIDChangeTimestampJSONRequestBody struct {
	Timestamp string `json:"timestamp"`
}

type PutTIDChangeTimestampJSONRequest struct {
	PathParams PutTIDChangeTimestampJSONPathParams
	Headers    PutTIDChangeTimestampJSONHeaders
	Request    *PutTIDChangeTimestampJSONRequestBody `request:"mediaType=application/json"`
}

type PutTIDChangeTimestampJSON200ApplicationJSON struct {
	Success *string `json:"success,omitempty"`
}

type PutTIDChangeTimestampJSONResponse struct {
	ContentType                                       string
	PutTIDChangeTimestampJSON200ApplicationJSONObject *PutTIDChangeTimestampJSON200ApplicationJSON
	StatusCode                                        int64
}
