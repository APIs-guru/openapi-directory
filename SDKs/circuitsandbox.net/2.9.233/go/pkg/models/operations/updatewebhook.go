package operations

import (
"openapi/pkg/models/shared")

type UpdateWebHookPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}


type UpdateWebHookRequestBodyFilterEnum string

const (
    UpdateWebHookRequestBodyFilterEnumConversationCreate UpdateWebHookRequestBodyFilterEnum = "CONVERSATION.CREATE"
UpdateWebHookRequestBodyFilterEnumConversationUpdate UpdateWebHookRequestBodyFilterEnum = "CONVERSATION.UPDATE"
UpdateWebHookRequestBodyFilterEnumConversationAddItem UpdateWebHookRequestBodyFilterEnum = "CONVERSATION.ADD_ITEM"
UpdateWebHookRequestBodyFilterEnumConversationUpdateItem UpdateWebHookRequestBodyFilterEnum = "CONVERSATION.UPDATE_ITEM"
UpdateWebHookRequestBodyFilterEnumUserIncomingCall UpdateWebHookRequestBodyFilterEnum = "USER.INCOMING_CALL"
UpdateWebHookRequestBodyFilterEnumUserUserUpdated UpdateWebHookRequestBodyFilterEnum = "USER.USER_UPDATED"
UpdateWebHookRequestBodyFilterEnumUserUserSettingUpdated UpdateWebHookRequestBodyFilterEnum = "USER.USER_SETTING_UPDATED"
UpdateWebHookRequestBodyFilterEnumUserSubmitFormData UpdateWebHookRequestBodyFilterEnum = "USER.SUBMIT_FORM_DATA"
)


type UpdateWebHookRequestBody struct {
    Filter []UpdateWebHookRequestBodyFilterEnum `form:"name=filter"`
    URL *string `form:"name=url"`
    
}

type UpdateWebHookSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateWebHookRequest struct {
    PathParams UpdateWebHookPathParams 
    Request *UpdateWebHookRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateWebHookSecurity 
    
}

type UpdateWebHookResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    WebHook *interface{} 
    
}

