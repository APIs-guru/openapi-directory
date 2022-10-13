package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemDownloadablesQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetItemDownloadablesRequest struct {
	QueryParams GetItemDownloadablesQueryParams
	Request     shared.ItemDownloadableRequest `request:"mediaType=application/json"`
}

type GetItemDownloadablesResponse struct {
	ContentType          string
	ItemDownloadableList *shared.ItemDownloadableList
	ServiceError         *shared.ServiceError
	StatusCode           int64
}
