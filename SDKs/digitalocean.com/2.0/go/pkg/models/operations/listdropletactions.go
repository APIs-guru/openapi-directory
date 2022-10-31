package operations

import (
"openapi/pkg/models/shared")

type ListDropletActionsPathParams struct {
    DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
    
}

type ListDropletActionsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ListDropletActionsRequest struct {
    PathParams ListDropletActionsPathParams 
    QueryParams ListDropletActionsQueryParams 
    
}

type ListDropletActions200ApplicationJSONLinksPages1 struct {
    Last *string `json:"last,omitempty"`
    Next *string `json:"next,omitempty"`
    
}

type ListDropletActions200ApplicationJSONLinksPages2 struct {
    First *string `json:"first,omitempty"`
    Prev *string `json:"prev,omitempty"`
    
}

type ListDropletActions200ApplicationJSONLinks struct {
    Pages *interface{} `json:"pages,omitempty"`
    
}

type ListDropletActions200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type ListDropletActions200ApplicationJSON struct {
    Actions []shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems `json:"actions,omitempty"`
    Links *ListDropletActions200ApplicationJSONLinks `json:"links,omitempty"`
    Meta ListDropletActions200ApplicationJSONMeta `json:"meta"`
    
}

type ListDropletActions401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListDropletActionsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListDropletActions200ApplicationJSONObject *ListDropletActions200ApplicationJSON 
    ListDropletActions401ApplicationJSONObject *ListDropletActions401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

