package operations

import (
	"openapi/pkg/models/shared"
)

type RetargetingGetQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type RetargetingGetRequest struct {
	QueryParams RetargetingGetQueryParams
}

type RetargetingGetResponse struct {
	APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64
	ContentType                                                          string
	StatusCode                                                           int64
}
