package operations

import (
"openapi/pkg/models/shared")

type TinVerificationComprehensiveCheckQueryParams struct {
    Name string `queryParam:"style=form,explode=true,name=name"`
    Threshold *int64 `queryParam:"style=form,explode=true,name=threshold"`
    Tin string `queryParam:"style=form,explode=true,name=tin"`
    
}

type TinVerificationComprehensiveCheckSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type TinVerificationComprehensiveCheckRequest struct {
    QueryParams TinVerificationComprehensiveCheckQueryParams 
    Security TinVerificationComprehensiveCheckSecurity 
    
}

type TinVerificationComprehensiveCheckResponse struct {
    ContentType string 
    StatusCode int64 
    TinVerificationComprehensiveCheck200ApplicationJSONAny *interface{} 
    TinVerificationComprehensiveCheckDefaultApplicationJSONAny *interface{} 
    
}

