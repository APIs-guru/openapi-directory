package operations

import (
	"openapi/pkg/models/shared"
)

type FlagItemPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type FlagItemRequestBody struct {
	ItemCreationTime *string `form:"name=itemCreationTime"`
	ParentID         *string `form:"name=parentId"`
}

type FlagItemSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type FlagItemRequest struct {
	PathParams FlagItemPathParams
	Request    *FlagItemRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   FlagItemSecurity
}

type FlagItemResponse struct {
	ContentType string
	StatusCode  int64
}
