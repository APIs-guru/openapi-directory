package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfileAttributesHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type UpdateProfileAttributesRequest struct {
	Headers UpdateProfileAttributesHeaders
	Request shared.ProfileAttributesRequest `request:"mediaType=application/json"`
}

type UpdateProfileAttributesResponse struct {
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	ProfileAttributes *shared.ProfileAttributes
	StatusCode        int64
}
