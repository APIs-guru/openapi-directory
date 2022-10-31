package operations

import (
"openapi/pkg/models/shared")

type GetItvProfileQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetItvProfileSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetItvProfileRequest struct {
    QueryParams GetItvProfileQueryParams 
    Security GetItvProfileSecurity 
    
}

type GetItvProfileResponse struct {
    ContentType string 
    GetItvProfile200ApplicationJSONObject map[string]interface{} 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

