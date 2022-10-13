package operations

import (
	"openapi/pkg/models/shared"
)

type RequestOpenIDAuthResourcesResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	OpenIDAuthResources *shared.OpenIDAuthResources
	StatusCode          int64
}
