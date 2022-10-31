package operations

import (
"openapi/pkg/models/shared")

type AddTextItemPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type AddTextItemRequestBody struct {
    Attachments []string `form:"name=attachments"`
    Content *string `form:"name=content"`
    FormMetaData *string `form:"name=formMetaData"`
    Subject *string `form:"name=subject"`
    
}

type AddTextItemSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddTextItemRequest struct {
    PathParams AddTextItemPathParams 
    Request *AddTextItemRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security AddTextItemSecurity 
    
}

type AddTextItemResponse struct {
    Body []byte 
    ContentType string 
    ConversationItem *interface{} 
    StatusCode int64 
    
}

