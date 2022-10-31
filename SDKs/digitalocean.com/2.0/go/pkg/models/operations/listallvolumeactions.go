package operations

import (
"openapi/pkg/models/shared")

type ListAllVolumeActionsPathParams struct {
    VolumeID string `pathParam:"style=simple,explode=false,name=volume_id"`
    
}

type ListAllVolumeActionsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ListAllVolumeActionsRequest struct {
    PathParams ListAllVolumeActionsPathParams 
    QueryParams ListAllVolumeActionsQueryParams 
    
}

type ListAllVolumeActions200ApplicationJSONLinksPages1 struct {
    Last *string `json:"last,omitempty"`
    Next *string `json:"next,omitempty"`
    
}

type ListAllVolumeActions200ApplicationJSONLinksPages2 struct {
    First *string `json:"first,omitempty"`
    Prev *string `json:"prev,omitempty"`
    
}

type ListAllVolumeActions200ApplicationJSONLinks struct {
    Pages *interface{} `json:"pages,omitempty"`
    
}

type ListAllVolumeActions200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type ListAllVolumeActions200ApplicationJSON struct {
    Actions []shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction `json:"actions,omitempty"`
    Links *ListAllVolumeActions200ApplicationJSONLinks `json:"links,omitempty"`
    Meta ListAllVolumeActions200ApplicationJSONMeta `json:"meta"`
    
}

type ListAllVolumeActions401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListAllVolumeActionsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListAllVolumeActions200ApplicationJSONObject *ListAllVolumeActions200ApplicationJSON 
    ListAllVolumeActions401ApplicationJSONObject *ListAllVolumeActions401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

