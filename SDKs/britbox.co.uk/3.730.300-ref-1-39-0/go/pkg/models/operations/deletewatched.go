package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWatchedQueryParams struct {
	Ff      []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	ItemIds []string                  `queryParam:"style=form,explode=false,name=item_ids"`
	Lang    *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type DeleteWatchedSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type DeleteWatchedRequest struct {
	QueryParams DeleteWatchedQueryParams
	Security    DeleteWatchedSecurity
}

type DeleteWatchedResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
