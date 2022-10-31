package operations

import (
"openapi/pkg/models/shared")

type GetJoinDetailsMultipleQueryParams struct {
    ConvIds []string `queryParam:"style=form,explode=true,name=convIds"`
    
}

type GetJoinDetailsMultipleSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetJoinDetailsMultipleRequest struct {
    QueryParams GetJoinDetailsMultipleQueryParams 
    Security GetJoinDetailsMultipleSecurity 
    
}

type GetJoinDetailsMultipleResponse struct {
    Body []byte 
    ContentType string 
    ConversationDetails []interface{} 
    StatusCode int64 
    
}

