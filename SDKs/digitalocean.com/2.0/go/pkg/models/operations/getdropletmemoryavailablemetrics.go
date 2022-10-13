package operations

import (
	"openapi/pkg/models/shared"
)

type GetDropletMemoryAvailableMetricsQueryParams struct {
	End    string `queryParam:"style=form,explode=true,name=end"`
	HostID string `queryParam:"style=form,explode=true,name=host_id"`
	Start  string `queryParam:"style=form,explode=true,name=start"`
}

type GetDropletMemoryAvailableMetricsRequest struct {
	QueryParams GetDropletMemoryAvailableMetricsQueryParams
}

type GetDropletMemoryAvailableMetrics200ApplicationJSONDataResult struct {
	Metric map[string]string `json:"metric"`
	Values [][]interface{}   `json:"values"`
}

type GetDropletMemoryAvailableMetrics200ApplicationJSONDataResultTypeEnum string

const (
	GetDropletMemoryAvailableMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletMemoryAvailableMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)

type GetDropletMemoryAvailableMetrics200ApplicationJSONData struct {
	Result     []GetDropletMemoryAvailableMetrics200ApplicationJSONDataResult       `json:"result"`
	ResultType GetDropletMemoryAvailableMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
}

type GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnum string

const (
	GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnumSuccess GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnum = "success"
	GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnumError   GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnum = "error"
)

type GetDropletMemoryAvailableMetrics200ApplicationJSON struct {
	Data   GetDropletMemoryAvailableMetrics200ApplicationJSONData       `json:"data"`
	Status GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnum `json:"status"`
}

type GetDropletMemoryAvailableMetrics401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetDropletMemoryAvailableMetricsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDropletMemoryAvailableMetrics200ApplicationJSONObject  *GetDropletMemoryAvailableMetrics200ApplicationJSON
	GetDropletMemoryAvailableMetrics401ApplicationJSONObject  *GetDropletMemoryAvailableMetrics401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
