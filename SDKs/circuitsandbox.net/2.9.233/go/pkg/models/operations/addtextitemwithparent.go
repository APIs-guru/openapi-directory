package operations

import (
	"openapi/pkg/models/shared"
)

type AddTextItemWithParentPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type AddTextItemWithParentRequestBody struct {
	Attachments  []string `form:"name=attachments"`
	Content      *string  `form:"name=content"`
	FormMetaData *string  `form:"name=formMetaData"`
	Subject      *string  `form:"name=subject"`
}

type AddTextItemWithParentSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddTextItemWithParentRequest struct {
	PathParams AddTextItemWithParentPathParams
	Request    *AddTextItemWithParentRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   AddTextItemWithParentSecurity
}

type AddTextItemWithParentResponse struct {
	Body             []byte
	ContentType      string
	ConversationItem *interface{}
	StatusCode       int64
}
