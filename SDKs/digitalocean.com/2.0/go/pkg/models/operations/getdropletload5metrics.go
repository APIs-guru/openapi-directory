package operations

import (
"openapi/pkg/models/shared")

type GetDropletLoad5MetricsQueryParams struct {
    End string `queryParam:"style=form,explode=true,name=end"`
    HostID string `queryParam:"style=form,explode=true,name=host_id"`
    Start string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetDropletLoad5MetricsRequest struct {
    QueryParams GetDropletLoad5MetricsQueryParams 
    
}

type GetDropletLoad5Metrics200ApplicationJSONDataResult struct {
    Metric map[string]string `json:"metric"`
    Values [][]interface{} `json:"values"`
    
}


type GetDropletLoad5Metrics200ApplicationJSONDataResultTypeEnum string

const (
    GetDropletLoad5Metrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletLoad5Metrics200ApplicationJSONDataResultTypeEnum = "matrix"
)


type GetDropletLoad5Metrics200ApplicationJSONData struct {
    Result []GetDropletLoad5Metrics200ApplicationJSONDataResult `json:"result"`
    ResultType GetDropletLoad5Metrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
    
}


type GetDropletLoad5Metrics200ApplicationJSONStatusEnum string

const (
    GetDropletLoad5Metrics200ApplicationJSONStatusEnumSuccess GetDropletLoad5Metrics200ApplicationJSONStatusEnum = "success"
GetDropletLoad5Metrics200ApplicationJSONStatusEnumError GetDropletLoad5Metrics200ApplicationJSONStatusEnum = "error"
)


type GetDropletLoad5Metrics200ApplicationJSON struct {
    Data GetDropletLoad5Metrics200ApplicationJSONData `json:"data"`
    Status GetDropletLoad5Metrics200ApplicationJSONStatusEnum `json:"status"`
    
}

type GetDropletLoad5Metrics401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDropletLoad5MetricsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDropletLoad5Metrics200ApplicationJSONObject *GetDropletLoad5Metrics200ApplicationJSON 
    GetDropletLoad5Metrics401ApplicationJSONObject *GetDropletLoad5Metrics401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

