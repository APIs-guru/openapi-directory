package operations

import (
	"openapi/pkg/models/shared"
)

type AddWebHookRequestBodyFilterEnum string

const (
	AddWebHookRequestBodyFilterEnumConversationCreate     AddWebHookRequestBodyFilterEnum = "CONVERSATION.CREATE"
	AddWebHookRequestBodyFilterEnumConversationUpdate     AddWebHookRequestBodyFilterEnum = "CONVERSATION.UPDATE"
	AddWebHookRequestBodyFilterEnumConversationAddItem    AddWebHookRequestBodyFilterEnum = "CONVERSATION.ADD_ITEM"
	AddWebHookRequestBodyFilterEnumConversationUpdateItem AddWebHookRequestBodyFilterEnum = "CONVERSATION.UPDATE_ITEM"
	AddWebHookRequestBodyFilterEnumUserIncomingCall       AddWebHookRequestBodyFilterEnum = "USER.INCOMING_CALL"
	AddWebHookRequestBodyFilterEnumUserUserUpdated        AddWebHookRequestBodyFilterEnum = "USER.USER_UPDATED"
	AddWebHookRequestBodyFilterEnumUserUserSettingUpdated AddWebHookRequestBodyFilterEnum = "USER.USER_SETTING_UPDATED"
	AddWebHookRequestBodyFilterEnumUserSubmitFormData     AddWebHookRequestBodyFilterEnum = "USER.SUBMIT_FORM_DATA"
)

type AddWebHookRequestBody struct {
	Filter []AddWebHookRequestBodyFilterEnum `form:"name=filter"`
	URL    string                            `form:"name=url"`
}

type AddWebHookSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddWebHookRequest struct {
	Request  AddWebHookRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security AddWebHookSecurity
}

type AddWebHookResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	WebHook     *interface{}
}
