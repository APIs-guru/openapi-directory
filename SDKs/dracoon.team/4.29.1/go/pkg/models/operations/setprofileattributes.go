package operations

import (
	"openapi/pkg/models/shared"
)

type SetProfileAttributesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type SetProfileAttributesRequest struct {
	Headers SetProfileAttributesHeaders
	Request shared.ProfileAttributesRequest `request:"mediaType=application/json"`
}

type SetProfileAttributesResponse struct {
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	ProfileAttributes *shared.ProfileAttributes
	StatusCode        int64
}
