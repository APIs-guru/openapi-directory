package operations

import (
"openapi/pkg/models/shared")

type GetDomainRecordPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
    DomainRecordID int64 `pathParam:"style=simple,explode=false,name=domain_record_id"`
    
}

type GetDomainRecordRequest struct {
    PathParams GetDomainRecordPathParams 
    
}

type GetDomainRecord401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDomainRecordResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDomainRecord200ApplicationJSONAny *interface{} 
    GetDomainRecord401ApplicationJSONObject *GetDomainRecord401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

