package operations

import (
"openapi/pkg/models/shared")

type PostFloatingIPActionPathParams struct {
    FloatingIP string `pathParam:"style=simple,explode=false,name=floating_ip"`
    
}


type PostFloatingIPActionRequestBody1TypeEnum string

const (
    PostFloatingIPActionRequestBody1TypeEnumAssign PostFloatingIPActionRequestBody1TypeEnum = "assign"
PostFloatingIPActionRequestBody1TypeEnumUnassign PostFloatingIPActionRequestBody1TypeEnum = "unassign"
)


type PostFloatingIPActionRequestBody1 struct {
    Type PostFloatingIPActionRequestBody1TypeEnum `json:"type"`
    
}


type PostFloatingIPActionRequestBody2TypeEnum string

const (
    PostFloatingIPActionRequestBody2TypeEnumAssign PostFloatingIPActionRequestBody2TypeEnum = "assign"
PostFloatingIPActionRequestBody2TypeEnumUnassign PostFloatingIPActionRequestBody2TypeEnum = "unassign"
)


type PostFloatingIPActionRequestBody2 struct {
    DropletID int64 `json:"droplet_id"`
    Type PostFloatingIPActionRequestBody2TypeEnum `json:"type"`
    
}

type PostFloatingIPActionRequest struct {
    PathParams PostFloatingIPActionPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostFloatingIPAction401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type PostFloatingIPActionResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    PostFloatingIPAction201ApplicationJSONAny *interface{} 
    PostFloatingIPAction401ApplicationJSONObject *PostFloatingIPAction401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

