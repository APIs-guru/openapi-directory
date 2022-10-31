package operations

import (
"openapi/pkg/models/shared")

type DeleteDomainRecordPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
    DomainRecordID int64 `pathParam:"style=simple,explode=false,name=domain_record_id"`
    
}

type DeleteDomainRecordRequest struct {
    PathParams DeleteDomainRecordPathParams 
    
}

type DeleteDomainRecord401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteDomainRecordResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteDomainRecord401ApplicationJSONObject *DeleteDomainRecord401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

