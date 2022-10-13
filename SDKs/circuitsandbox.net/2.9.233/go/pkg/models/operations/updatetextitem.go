package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTextItemPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type UpdateTextItemRequestBody struct {
	Attachments  []string `form:"name=attachments"`
	Content      *string  `form:"name=content"`
	FormMetaData *string  `form:"name=formMetaData"`
	Subject      *string  `form:"name=subject"`
}

type UpdateTextItemSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateTextItemRequest struct {
	PathParams UpdateTextItemPathParams
	Request    *UpdateTextItemRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTextItemSecurity
}

type UpdateTextItemResponse struct {
	Body             []byte
	ContentType      string
	ConversationItem *interface{}
	StatusCode       int64
}
