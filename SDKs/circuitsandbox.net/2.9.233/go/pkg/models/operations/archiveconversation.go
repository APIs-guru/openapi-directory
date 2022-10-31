package operations

import (
"openapi/pkg/models/shared")

type ArchiveConversationPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type ArchiveConversationSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ArchiveConversationRequest struct {
    PathParams ArchiveConversationPathParams 
    Security ArchiveConversationSecurity 
    
}

type ArchiveConversationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

