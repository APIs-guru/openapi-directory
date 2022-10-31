package operations

import (
"openapi/pkg/models/shared")


type ListTypeEnum string

const (
    ListTypeEnumDroplet ListTypeEnum = "droplet"
ListTypeEnumKubernetes ListTypeEnum = "kubernetes"
)


type ListQueryParams struct {
    Type *ListTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type ListRequest struct {
    QueryParams ListQueryParams 
    
}

type List401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    List200ApplicationJSONAny *interface{} 
    List401ApplicationJSONObject *List401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

