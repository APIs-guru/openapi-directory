package operations

import (
"openapi/pkg/models/shared")

type EinVerificationComprehensiveQueryParams struct {
    Ein string `queryParam:"style=form,explode=true,name=ein"`
    
}

type EinVerificationComprehensiveSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type EinVerificationComprehensiveRequest struct {
    QueryParams EinVerificationComprehensiveQueryParams 
    Security EinVerificationComprehensiveSecurity 
    
}

type EinVerificationComprehensiveResponse struct {
    ContentType string 
    EinVerificationComprehensive200ApplicationJSONAny *interface{} 
    EinVerificationComprehensiveDefaultApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

