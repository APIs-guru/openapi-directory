package operations

import (
"openapi/pkg/models/shared")

type GetDropletMemoryFreeMetricsQueryParams struct {
    End string `queryParam:"style=form,explode=true,name=end"`
    HostID string `queryParam:"style=form,explode=true,name=host_id"`
    Start string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetDropletMemoryFreeMetricsRequest struct {
    QueryParams GetDropletMemoryFreeMetricsQueryParams 
    
}

type GetDropletMemoryFreeMetrics200ApplicationJSONDataResult struct {
    Metric map[string]string `json:"metric"`
    Values [][]interface{} `json:"values"`
    
}


type GetDropletMemoryFreeMetrics200ApplicationJSONDataResultTypeEnum string

const (
    GetDropletMemoryFreeMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletMemoryFreeMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)


type GetDropletMemoryFreeMetrics200ApplicationJSONData struct {
    Result []GetDropletMemoryFreeMetrics200ApplicationJSONDataResult `json:"result"`
    ResultType GetDropletMemoryFreeMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
    
}


type GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnum string

const (
    GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnumSuccess GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnum = "success"
GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnumError GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnum = "error"
)


type GetDropletMemoryFreeMetrics200ApplicationJSON struct {
    Data GetDropletMemoryFreeMetrics200ApplicationJSONData `json:"data"`
    Status GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnum `json:"status"`
    
}

type GetDropletMemoryFreeMetrics401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDropletMemoryFreeMetricsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDropletMemoryFreeMetrics200ApplicationJSONObject *GetDropletMemoryFreeMetrics200ApplicationJSON 
    GetDropletMemoryFreeMetrics401ApplicationJSONObject *GetDropletMemoryFreeMetrics401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

