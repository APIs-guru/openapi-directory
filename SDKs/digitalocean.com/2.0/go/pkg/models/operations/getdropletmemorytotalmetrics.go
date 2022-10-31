package operations

import (
"openapi/pkg/models/shared")

type GetDropletMemoryTotalMetricsQueryParams struct {
    End string `queryParam:"style=form,explode=true,name=end"`
    HostID string `queryParam:"style=form,explode=true,name=host_id"`
    Start string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetDropletMemoryTotalMetricsRequest struct {
    QueryParams GetDropletMemoryTotalMetricsQueryParams 
    
}

type GetDropletMemoryTotalMetrics200ApplicationJSONDataResult struct {
    Metric map[string]string `json:"metric"`
    Values [][]interface{} `json:"values"`
    
}


type GetDropletMemoryTotalMetrics200ApplicationJSONDataResultTypeEnum string

const (
    GetDropletMemoryTotalMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletMemoryTotalMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)


type GetDropletMemoryTotalMetrics200ApplicationJSONData struct {
    Result []GetDropletMemoryTotalMetrics200ApplicationJSONDataResult `json:"result"`
    ResultType GetDropletMemoryTotalMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
    
}


type GetDropletMemoryTotalMetrics200ApplicationJSONStatusEnum string

const (
    GetDropletMemoryTotalMetrics200ApplicationJSONStatusEnumSuccess GetDropletMemoryTotalMetrics200ApplicationJSONStatusEnum = "success"
GetDropletMemoryTotalMetrics200ApplicationJSONStatusEnumError GetDropletMemoryTotalMetrics200ApplicationJSONStatusEnum = "error"
)


type GetDropletMemoryTotalMetrics200ApplicationJSON struct {
    Data GetDropletMemoryTotalMetrics200ApplicationJSONData `json:"data"`
    Status GetDropletMemoryTotalMetrics200ApplicationJSONStatusEnum `json:"status"`
    
}

type GetDropletMemoryTotalMetrics401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDropletMemoryTotalMetricsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDropletMemoryTotalMetrics200ApplicationJSONObject *GetDropletMemoryTotalMetrics200ApplicationJSON 
    GetDropletMemoryTotalMetrics401ApplicationJSONObject *GetDropletMemoryTotalMetrics401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

