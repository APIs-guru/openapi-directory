package operations

import (
	"openapi/pkg/models/shared"
)

type DatabaseListCollectionsQueryParams struct {
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
	Search    *string `queryParam:"style=form,explode=true,name=search"`
}

type DatabaseListCollectionsSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type DatabaseListCollectionsRequest struct {
	QueryParams DatabaseListCollectionsQueryParams
	Security    DatabaseListCollectionsSecurity
}

type DatabaseListCollectionsResponse struct {
	ContentType    string
	StatusCode     int64
	CollectionList *shared.CollectionList
}
