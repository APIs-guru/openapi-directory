package operations

import (
	"openapi/pkg/models/shared"
)

type LikeItemPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type LikeItemSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type LikeItemRequest struct {
	PathParams LikeItemPathParams
	Security   LikeItemSecurity
}

type LikeItemResponse struct {
	ContentType string
	StatusCode  int64
}
