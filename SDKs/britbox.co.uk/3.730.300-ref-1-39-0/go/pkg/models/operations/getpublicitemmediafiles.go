package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicItemMediaFilesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPublicItemMediaFilesQueryParams struct {
	Delivery   []shared.MediaFileDeliveryEnum `queryParam:"style=form,explode=false,name=delivery"`
	Device     *string                        `queryParam:"style=form,explode=true,name=device"`
	Ff         []shared.FeatureFlagsEnum      `queryParam:"style=form,explode=false,name=ff"`
	Formats    []shared.MediaFileFormatsEnum  `queryParam:"style=form,explode=false,name=formats"`
	Lang       *string                        `queryParam:"style=form,explode=true,name=lang"`
	Resolution shared.MediaFileResolutionEnum `queryParam:"style=form,explode=true,name=resolution"`
	Segments   []string                       `queryParam:"style=form,explode=false,name=segments"`
	Sub        *string                        `queryParam:"style=form,explode=true,name=sub"`
}

type GetPublicItemMediaFilesRequest struct {
	PathParams  GetPublicItemMediaFilesPathParams
	QueryParams GetPublicItemMediaFilesQueryParams
}

type GetPublicItemMediaFilesResponse struct {
	ContentType  string
	MediaFiles   []shared.MediaFile
	ServiceError *shared.ServiceError
	StatusCode   int64
}
