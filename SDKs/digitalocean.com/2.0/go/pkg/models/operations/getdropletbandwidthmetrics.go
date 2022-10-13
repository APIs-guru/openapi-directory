package operations

import (
	"openapi/pkg/models/shared"
)

type GetDropletBandwidthMetricsDirectionEnum string

const (
	GetDropletBandwidthMetricsDirectionEnumInbound  GetDropletBandwidthMetricsDirectionEnum = "inbound"
	GetDropletBandwidthMetricsDirectionEnumOutbound GetDropletBandwidthMetricsDirectionEnum = "outbound"
)

type GetDropletBandwidthMetricsInterfaceEnum string

const (
	GetDropletBandwidthMetricsInterfaceEnumPrivate GetDropletBandwidthMetricsInterfaceEnum = "private"
	GetDropletBandwidthMetricsInterfaceEnumPublic  GetDropletBandwidthMetricsInterfaceEnum = "public"
)

type GetDropletBandwidthMetricsQueryParams struct {
	Direction GetDropletBandwidthMetricsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	End       string                                  `queryParam:"style=form,explode=true,name=end"`
	HostID    string                                  `queryParam:"style=form,explode=true,name=host_id"`
	Interface GetDropletBandwidthMetricsInterfaceEnum `queryParam:"style=form,explode=true,name=interface"`
	Start     string                                  `queryParam:"style=form,explode=true,name=start"`
}

type GetDropletBandwidthMetricsRequest struct {
	QueryParams GetDropletBandwidthMetricsQueryParams
}

type GetDropletBandwidthMetrics200ApplicationJSONDataResult struct {
	Metric map[string]string `json:"metric"`
	Values [][]interface{}   `json:"values"`
}

type GetDropletBandwidthMetrics200ApplicationJSONDataResultTypeEnum string

const (
	GetDropletBandwidthMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletBandwidthMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)

type GetDropletBandwidthMetrics200ApplicationJSONData struct {
	Result     []GetDropletBandwidthMetrics200ApplicationJSONDataResult       `json:"result"`
	ResultType GetDropletBandwidthMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
}

type GetDropletBandwidthMetrics200ApplicationJSONStatusEnum string

const (
	GetDropletBandwidthMetrics200ApplicationJSONStatusEnumSuccess GetDropletBandwidthMetrics200ApplicationJSONStatusEnum = "success"
	GetDropletBandwidthMetrics200ApplicationJSONStatusEnumError   GetDropletBandwidthMetrics200ApplicationJSONStatusEnum = "error"
)

type GetDropletBandwidthMetrics200ApplicationJSON struct {
	Data   GetDropletBandwidthMetrics200ApplicationJSONData       `json:"data"`
	Status GetDropletBandwidthMetrics200ApplicationJSONStatusEnum `json:"status"`
}

type GetDropletBandwidthMetrics401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetDropletBandwidthMetricsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDropletBandwidthMetrics200ApplicationJSONObject        *GetDropletBandwidthMetrics200ApplicationJSON
	GetDropletBandwidthMetrics401ApplicationJSONObject        *GetDropletBandwidthMetrics401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
