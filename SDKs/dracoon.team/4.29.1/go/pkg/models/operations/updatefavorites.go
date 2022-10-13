package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFavoritesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateFavoritesRequest struct {
	Headers UpdateFavoritesHeaders
	Request shared.UpdateFavoritesBulkRequest `request:"mediaType=application/json"`
}

type UpdateFavoritesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
