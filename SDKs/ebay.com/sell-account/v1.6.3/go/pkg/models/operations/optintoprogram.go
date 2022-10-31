package operations

import (
"openapi/pkg/models/shared")

type OptInToProgramSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type OptInToProgramRequest struct {
    Request shared.Program `request:"mediaType=application/json"`
    Security OptInToProgramSecurity 
    
}

type OptInToProgramResponse struct {
    ContentType string 
    StatusCode int64 
    OptInToProgram200ApplicationJSONObject map[string]interface{} 
    
}

