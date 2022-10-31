package operations

import (
"openapi/pkg/models/shared")

type GetDropletCPUMetricsQueryParams struct {
    End string `queryParam:"style=form,explode=true,name=end"`
    HostID string `queryParam:"style=form,explode=true,name=host_id"`
    Start string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetDropletCPUMetricsRequest struct {
    QueryParams GetDropletCPUMetricsQueryParams 
    
}

type GetDropletCPUMetrics200ApplicationJSONDataResult struct {
    Metric map[string]string `json:"metric"`
    Values [][]interface{} `json:"values"`
    
}


type GetDropletCPUMetrics200ApplicationJSONDataResultTypeEnum string

const (
    GetDropletCPUMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletCPUMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)


type GetDropletCPUMetrics200ApplicationJSONData struct {
    Result []GetDropletCPUMetrics200ApplicationJSONDataResult `json:"result"`
    ResultType GetDropletCPUMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
    
}


type GetDropletCPUMetrics200ApplicationJSONStatusEnum string

const (
    GetDropletCPUMetrics200ApplicationJSONStatusEnumSuccess GetDropletCPUMetrics200ApplicationJSONStatusEnum = "success"
GetDropletCPUMetrics200ApplicationJSONStatusEnumError GetDropletCPUMetrics200ApplicationJSONStatusEnum = "error"
)


type GetDropletCPUMetrics200ApplicationJSON struct {
    Data GetDropletCPUMetrics200ApplicationJSONData `json:"data"`
    Status GetDropletCPUMetrics200ApplicationJSONStatusEnum `json:"status"`
    
}

type GetDropletCPUMetrics401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDropletCPUMetricsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDropletCPUMetrics200ApplicationJSONObject *GetDropletCPUMetrics200ApplicationJSON 
    GetDropletCPUMetrics401ApplicationJSONObject *GetDropletCPUMetrics401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

