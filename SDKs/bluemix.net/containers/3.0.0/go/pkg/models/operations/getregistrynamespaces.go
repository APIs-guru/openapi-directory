package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryNamespacesHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetRegistryNamespacesRequest struct {
	Headers GetRegistryNamespacesHeaders
}

type GetRegistryNamespacesResponse struct {
	ContentType string
	Namespace   *shared.Namespace
	StatusCode  int64
}
