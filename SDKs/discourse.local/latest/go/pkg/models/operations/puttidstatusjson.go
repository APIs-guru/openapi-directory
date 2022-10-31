package operations

type PutTIDStatusJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTIDStatusJSONHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type PutTIDStatusJSONRequestBodyEnabledEnum string

const (
	PutTIDStatusJSONRequestBodyEnabledEnumTrue  PutTIDStatusJSONRequestBodyEnabledEnum = "true"
	PutTIDStatusJSONRequestBodyEnabledEnumFalse PutTIDStatusJSONRequestBodyEnabledEnum = "false"
)

type PutTIDStatusJSONRequestBodyStatusEnum string

const (
	PutTIDStatusJSONRequestBodyStatusEnumClosed         PutTIDStatusJSONRequestBodyStatusEnum = "closed"
	PutTIDStatusJSONRequestBodyStatusEnumPinned         PutTIDStatusJSONRequestBodyStatusEnum = "pinned"
	PutTIDStatusJSONRequestBodyStatusEnumPinnedGlobally PutTIDStatusJSONRequestBodyStatusEnum = "pinned_globally"
	PutTIDStatusJSONRequestBodyStatusEnumArchived       PutTIDStatusJSONRequestBodyStatusEnum = "archived"
	PutTIDStatusJSONRequestBodyStatusEnumVisible        PutTIDStatusJSONRequestBodyStatusEnum = "visible"
)

type PutTIDStatusJSONRequestBody struct {
	Enabled PutTIDStatusJSONRequestBodyEnabledEnum `json:"enabled"`
	Status  PutTIDStatusJSONRequestBodyStatusEnum  `json:"status"`
	Until   *string                                `json:"until,omitempty"`
}

type PutTIDStatusJSONRequest struct {
	PathParams PutTIDStatusJSONPathParams
	Headers    PutTIDStatusJSONHeaders
	Request    *PutTIDStatusJSONRequestBody `request:"mediaType=application/json"`
}

type PutTIDStatusJSON200ApplicationJSON struct {
	Success           *string `json:"success,omitempty"`
	TopicStatusUpdate *string `json:"topic_status_update,omitempty"`
}

type PutTIDStatusJSONResponse struct {
	ContentType                              string
	PutTIDStatusJSON200ApplicationJSONObject *PutTIDStatusJSON200ApplicationJSON
	StatusCode                               int64
}
