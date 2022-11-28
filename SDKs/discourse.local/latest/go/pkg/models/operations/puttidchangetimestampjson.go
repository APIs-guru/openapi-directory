package operations

type PutTIDChangeTimestampJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTIDChangeTimestampJSONHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type PutTIDChangeTimestampJSONRequestBody struct {
	Timestamp string `json:"timestamp"`
}

type PutTIDChangeTimestampJSON200ApplicationJSON struct {
	Success *string `json:"success,omitempty"`
}

type PutTIDChangeTimestampJSONRequest struct {
	PathParams PutTIDChangeTimestampJSONPathParams
	Headers    PutTIDChangeTimestampJSONHeaders
	Request    *PutTIDChangeTimestampJSONRequestBody `request:"mediaType=application/json"`
}

type PutTIDChangeTimestampJSONResponse struct {
	ContentType                                       string
	PutTIDChangeTimestampJSON200ApplicationJSONObject *PutTIDChangeTimestampJSON200ApplicationJSON
	StatusCode                                        int64
}
