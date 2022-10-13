package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemBookmarkPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetItemBookmarkQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetItemBookmarkSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type GetItemBookmarkRequest struct {
	PathParams  GetItemBookmarkPathParams
	QueryParams GetItemBookmarkQueryParams
	Security    GetItemBookmarkSecurity
}

type GetItemBookmarkResponse struct {
	Bookmark     *shared.Bookmark
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
