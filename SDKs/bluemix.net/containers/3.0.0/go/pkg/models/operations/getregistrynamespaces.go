package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryNamespacesHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetRegistryNamespacesRequest struct {
	Headers GetRegistryNamespacesHeaders
}

type GetRegistryNamespacesResponse struct {
	ContentType string
	Namespace   *shared.Namespace
	StatusCode  int64
}
