package operations

import (
	"openapi/pkg/models/shared"
)

type GetDropletMemoryCachedMetricsQueryParams struct {
	End    string `queryParam:"style=form,explode=true,name=end"`
	HostID string `queryParam:"style=form,explode=true,name=host_id"`
	Start  string `queryParam:"style=form,explode=true,name=start"`
}

type GetDropletMemoryCachedMetricsRequest struct {
	QueryParams GetDropletMemoryCachedMetricsQueryParams
}

type GetDropletMemoryCachedMetrics200ApplicationJSONDataResult struct {
	Metric map[string]string `json:"metric"`
	Values [][]interface{}   `json:"values"`
}

type GetDropletMemoryCachedMetrics200ApplicationJSONDataResultTypeEnum string

const (
	GetDropletMemoryCachedMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletMemoryCachedMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)

type GetDropletMemoryCachedMetrics200ApplicationJSONData struct {
	Result     []GetDropletMemoryCachedMetrics200ApplicationJSONDataResult       `json:"result"`
	ResultType GetDropletMemoryCachedMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
}

type GetDropletMemoryCachedMetrics200ApplicationJSONStatusEnum string

const (
	GetDropletMemoryCachedMetrics200ApplicationJSONStatusEnumSuccess GetDropletMemoryCachedMetrics200ApplicationJSONStatusEnum = "success"
	GetDropletMemoryCachedMetrics200ApplicationJSONStatusEnumError   GetDropletMemoryCachedMetrics200ApplicationJSONStatusEnum = "error"
)

type GetDropletMemoryCachedMetrics200ApplicationJSON struct {
	Data   GetDropletMemoryCachedMetrics200ApplicationJSONData       `json:"data"`
	Status GetDropletMemoryCachedMetrics200ApplicationJSONStatusEnum `json:"status"`
}

type GetDropletMemoryCachedMetrics401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetDropletMemoryCachedMetricsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDropletMemoryCachedMetrics200ApplicationJSONObject     *GetDropletMemoryCachedMetrics200ApplicationJSON
	GetDropletMemoryCachedMetrics401ApplicationJSONObject     *GetDropletMemoryCachedMetrics401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
