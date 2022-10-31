package operations

import (
	"openapi/pkg/models/shared"
)

type GetCachedImagePathParams struct {
	ImageID   string `pathParam:"style=simple,explode=false,name=imageID"`
	ListingID string `pathParam:"style=simple,explode=false,name=listingID"`
}

type GetCachedImageQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetCachedImageRequest struct {
	PathParams  GetCachedImagePathParams
	QueryParams GetCachedImageQueryParams
}

type GetCachedImageResponse struct {
	CacheImageResponse []byte
	ContentType        string
	Error              *shared.Error
	StatusCode         int64
}
