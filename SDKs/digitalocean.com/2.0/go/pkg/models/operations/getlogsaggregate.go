package operations

import (
"openapi/pkg/models/shared")

type GetLogsAggregatePathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    DeploymentID string `pathParam:"style=simple,explode=false,name=deployment_id"`
    
}

type GetLogsAggregateQueryParams struct {
    Follow *bool `queryParam:"style=form,explode=true,name=follow"`
    PodConnectionTimeout *string `queryParam:"style=form,explode=true,name=pod_connection_timeout"`
    Type shared.Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetParameters4Enum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetLogsAggregateRequest struct {
    PathParams GetLogsAggregatePathParams 
    QueryParams GetLogsAggregateQueryParams 
    
}

type GetLogsAggregate401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetLogsAggregateResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetLogsAggregate401ApplicationJSONObject *GetLogsAggregate401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema *shared.Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema 
    
}

