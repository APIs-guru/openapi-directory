package operations

import (
"openapi/pkg/models/shared")

type GetDropletLoad1MetricsQueryParams struct {
    End string `queryParam:"style=form,explode=true,name=end"`
    HostID string `queryParam:"style=form,explode=true,name=host_id"`
    Start string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetDropletLoad1MetricsRequest struct {
    QueryParams GetDropletLoad1MetricsQueryParams 
    
}

type GetDropletLoad1Metrics200ApplicationJSONDataResult struct {
    Metric map[string]string `json:"metric"`
    Values [][]interface{} `json:"values"`
    
}


type GetDropletLoad1Metrics200ApplicationJSONDataResultTypeEnum string

const (
    GetDropletLoad1Metrics200ApplicationJSONDataResultTypeEnumMatrix GetDropletLoad1Metrics200ApplicationJSONDataResultTypeEnum = "matrix"
)


type GetDropletLoad1Metrics200ApplicationJSONData struct {
    Result []GetDropletLoad1Metrics200ApplicationJSONDataResult `json:"result"`
    ResultType GetDropletLoad1Metrics200ApplicationJSONDataResultTypeEnum `json:"resultType"`
    
}


type GetDropletLoad1Metrics200ApplicationJSONStatusEnum string

const (
    GetDropletLoad1Metrics200ApplicationJSONStatusEnumSuccess GetDropletLoad1Metrics200ApplicationJSONStatusEnum = "success"
GetDropletLoad1Metrics200ApplicationJSONStatusEnumError GetDropletLoad1Metrics200ApplicationJSONStatusEnum = "error"
)


type GetDropletLoad1Metrics200ApplicationJSON struct {
    Data GetDropletLoad1Metrics200ApplicationJSONData `json:"data"`
    Status GetDropletLoad1Metrics200ApplicationJSONStatusEnum `json:"status"`
    
}

type GetDropletLoad1Metrics401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDropletLoad1MetricsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDropletLoad1Metrics200ApplicationJSONObject *GetDropletLoad1Metrics200ApplicationJSON 
    GetDropletLoad1Metrics401ApplicationJSONObject *GetDropletLoad1Metrics401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

