package operations

import (
"openapi/pkg/models/shared")

type GetDropletFilesystemFreeMetricsQueryParams struct {
    End string `queryParam:"style=form,explode=true,name=end"`
    HostID string `queryParam:"style=form,explode=true,name=host_id"`
    Start string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetDropletFilesystemFreeMetricsRequest struct {
    QueryParams GetDropletFilesystemFreeMetricsQueryParams 
    
}

type GetDropletFilesystemFreeMetrics200ApplicationJSONDataResult struct {
    Metric map[string]string `json:"metric"`
    Values [][]interface{} `json:"values"`
    
}


type GetDropletFilesystemFreeMetrics200ApplicationJSONDataResultTypeEnum string

const (
    GetDropletFilesystemFreeMetrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletFilesystemFreeMetrics200ApplicationJSONDataResultTypeEnum = "matrix"
)


type GetDropletFilesystemFreeMetrics200ApplicationJSONData struct {
    Result []GetDropletFilesystemFreeMetrics200ApplicationJSONDataResult `json:"result"`
    ResultType GetDropletFilesystemFreeMetrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
    
}


type GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnum string

const (
    GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnumSuccess GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnum = "success"
GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnumError GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnum = "error"
)


type GetDropletFilesystemFreeMetrics200ApplicationJSON struct {
    Data GetDropletFilesystemFreeMetrics200ApplicationJSONData `json:"data"`
    Status GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnum `json:"status"`
    
}

type GetDropletFilesystemFreeMetrics401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDropletFilesystemFreeMetricsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDropletFilesystemFreeMetrics200ApplicationJSONObject *GetDropletFilesystemFreeMetrics200ApplicationJSON 
    GetDropletFilesystemFreeMetrics401ApplicationJSONObject *GetDropletFilesystemFreeMetrics401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

