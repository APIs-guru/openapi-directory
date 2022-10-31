package operations

import (
"openapi/pkg/models/shared")

type GetConversationsByIDQueryParams struct {
    ConvIds []string `queryParam:"style=form,explode=true,name=convIds"`
    
}

type GetConversationsByIDSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetConversationsByIDRequest struct {
    QueryParams GetConversationsByIDQueryParams 
    Security GetConversationsByIDSecurity 
    
}

type GetConversationsByIDResponse struct {
    Body []byte 
    ContentType string 
    Conversations []interface{} 
    StatusCode int64 
    
}

