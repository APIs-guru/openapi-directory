package operations

import (
"openapi/pkg/models/shared")

type CodesOfConductGetAllCodesOfConduct415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type CodesOfConductGetAllCodesOfConductResponse struct {
    ContentType string 
    StatusCode int64 
    CodeOfConducts []shared.CodeOfConduct 
    CodesOfConductGetAllCodesOfConduct415ApplicationJSONObject *CodesOfConductGetAllCodesOfConduct415ApplicationJSON 
    
}

