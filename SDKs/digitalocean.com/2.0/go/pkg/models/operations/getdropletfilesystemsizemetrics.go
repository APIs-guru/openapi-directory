package operations

import (
	"openapi/pkg/models/shared"
)

type GetDropletFilesystemSizeMetricsQueryParams struct {
	End    string `queryParam:"style=form,explode=true,name=end"`
	HostID string `queryParam:"style=form,explode=true,name=host_id"`
	Start  string `queryParam:"style=form,explode=true,name=start"`
}

type GetDropletFilesystemSizeMetricsRequest struct {
	QueryParams GetDropletFilesystemSizeMetricsQueryParams
}

type GetDropletFilesystemSizeMetrics200ApplicationJSONDataResult struct {
	Metric map[string]string `json:"metric"`
	Values [][]interface{}   `json:"values"`
}

type GetDropletFilesystemSizeMetrics200ApplicationJSONDataResultTypeEnum string

const (
	GetDropletFilesystemSizeMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletFilesystemSizeMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)

type GetDropletFilesystemSizeMetrics200ApplicationJSONData struct {
	Result     []GetDropletFilesystemSizeMetrics200ApplicationJSONDataResult       `json:"result"`
	ResultType GetDropletFilesystemSizeMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
}

type GetDropletFilesystemSizeMetrics200ApplicationJSONStatusEnum string

const (
	GetDropletFilesystemSizeMetrics200ApplicationJSONStatusEnumSuccess GetDropletFilesystemSizeMetrics200ApplicationJSONStatusEnum = "success"
	GetDropletFilesystemSizeMetrics200ApplicationJSONStatusEnumError   GetDropletFilesystemSizeMetrics200ApplicationJSONStatusEnum = "error"
)

type GetDropletFilesystemSizeMetrics200ApplicationJSON struct {
	Data   GetDropletFilesystemSizeMetrics200ApplicationJSONData       `json:"data"`
	Status GetDropletFilesystemSizeMetrics200ApplicationJSONStatusEnum `json:"status"`
}

type GetDropletFilesystemSizeMetrics401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetDropletFilesystemSizeMetricsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDropletFilesystemSizeMetrics200ApplicationJSONObject   *GetDropletFilesystemSizeMetrics200ApplicationJSON
	GetDropletFilesystemSizeMetrics401ApplicationJSONObject   *GetDropletFilesystemSizeMetrics401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
