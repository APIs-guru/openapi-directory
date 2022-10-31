package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemBookmarkPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteItemBookmarkQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type DeleteItemBookmarkSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type DeleteItemBookmarkRequest struct {
	PathParams  DeleteItemBookmarkPathParams
	QueryParams DeleteItemBookmarkQueryParams
	Security    DeleteItemBookmarkSecurity
}

type DeleteItemBookmarkResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
