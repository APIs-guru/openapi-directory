package operations

import (
	"openapi/pkg/models/shared"
)

type GetDropletLoad15MetricsQueryParams struct {
	End    string `queryParam:"style=form,explode=true,name=end"`
	HostID string `queryParam:"style=form,explode=true,name=host_id"`
	Start  string `queryParam:"style=form,explode=true,name=start"`
}

type GetDropletLoad15MetricsRequest struct {
	QueryParams GetDropletLoad15MetricsQueryParams
}

type GetDropletLoad15Metrics200ApplicationJSONDataResult struct {
	Metric map[string]string `json:"metric"`
	Values [][]interface{}   `json:"values"`
}

type GetDropletLoad15Metrics200ApplicationJSONDataResultTypeEnum string

const (
	GetDropletLoad15Metrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletLoad15Metrics200ApplicationJSONDataResultTypeEnum = "matrix"
)

type GetDropletLoad15Metrics200ApplicationJSONData struct {
	Result     []GetDropletLoad15Metrics200ApplicationJSONDataResult       `json:"result"`
	ResultType GetDropletLoad15Metrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
}

type GetDropletLoad15Metrics200ApplicationJSONStatusEnum string

const (
	GetDropletLoad15Metrics200ApplicationJSONStatusEnumSuccess GetDropletLoad15Metrics200ApplicationJSONStatusEnum = "success"
	GetDropletLoad15Metrics200ApplicationJSONStatusEnumError   GetDropletLoad15Metrics200ApplicationJSONStatusEnum = "error"
)

type GetDropletLoad15Metrics200ApplicationJSON struct {
	Data   GetDropletLoad15Metrics200ApplicationJSONData       `json:"data"`
	Status GetDropletLoad15Metrics200ApplicationJSONStatusEnum `json:"status"`
}

type GetDropletLoad15Metrics401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetDropletLoad15MetricsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDropletLoad15Metrics200ApplicationJSONObject           *GetDropletLoad15Metrics200ApplicationJSON
	GetDropletLoad15Metrics401ApplicationJSONObject           *GetDropletLoad15Metrics401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
