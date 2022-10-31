package operations

import (
"openapi/pkg/models/shared")

type GetConversationsByLabelPathParams struct {
    LabelID string `pathParam:"style=simple,explode=false,name=labelId"`
    
}

type GetConversationsByLabelQueryParams struct {
    NextPagePointer *string `queryParam:"style=form,explode=true,name=nextPagePointer"`
    PageSize *float64 `queryParam:"style=form,explode=true,name=pageSize"`
    
}

type GetConversationsByLabelSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetConversationsByLabelRequest struct {
    PathParams GetConversationsByLabelPathParams 
    QueryParams GetConversationsByLabelQueryParams 
    Security GetConversationsByLabelSecurity 
    
}

type GetConversationsByLabelResponse struct {
    Body []byte 
    ContentType string 
    ConversationsPage *interface{} 
    StatusCode int64 
    
}

