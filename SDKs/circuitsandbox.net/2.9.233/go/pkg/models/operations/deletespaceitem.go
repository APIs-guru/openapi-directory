package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSpaceItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteSpaceItemSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteSpaceItemRequest struct {
	PathParams DeleteSpaceItemPathParams
	Security   DeleteSpaceItemSecurity
}

type DeleteSpaceItemResponse struct {
	ContentType string
	StatusCode  int64
}
