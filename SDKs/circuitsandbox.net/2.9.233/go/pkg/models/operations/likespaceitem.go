package operations

import (
	"openapi/pkg/models/shared"
)

type LikeSpaceItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type LikeSpaceItemSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type LikeSpaceItemRequest struct {
	PathParams LikeSpaceItemPathParams
	Security   LikeSpaceItemSecurity
}

type LikeSpaceItemResponse struct {
	ContentType string
	StatusCode  int64
}
