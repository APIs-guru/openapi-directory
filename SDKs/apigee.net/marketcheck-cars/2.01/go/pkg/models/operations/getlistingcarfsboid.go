package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingCarFsboIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingCarFsboIDQueryParams struct {
	APIKey               *string `queryParam:"style=form,explode=true,name=api_key"`
	AppendAPIKey         *bool   `queryParam:"style=form,explode=true,name=append_api_key"`
	IncludeRelevantLinks *bool   `queryParam:"style=form,explode=true,name=include_relevant_links"`
}

type GetListingCarFsboIDRequest struct {
	PathParams  GetListingCarFsboIDPathParams
	QueryParams GetListingCarFsboIDQueryParams
}

type GetListingCarFsboIDResponse struct {
	ContentType string
	Error       *shared.Error
	Listing     *shared.Listing
	StatusCode  int64
}
