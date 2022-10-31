package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingCarFsboIDMediaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingCarFsboIDMediaQueryParams struct {
	APIKey       *string `queryParam:"style=form,explode=true,name=api_key"`
	AppendAPIKey *bool   `queryParam:"style=form,explode=true,name=append_api_key"`
}

type GetListingCarFsboIDMediaRequest struct {
	PathParams  GetListingCarFsboIDMediaPathParams
	QueryParams GetListingCarFsboIDMediaQueryParams
}

type GetListingCarFsboIDMediaResponse struct {
	ContentType  string
	Error        *shared.Error
	ListingMedia *shared.ListingMedia
	StatusCode   int64
}
