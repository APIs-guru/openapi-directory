package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryNamespacesNamespacePathParams struct {
	Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
}

type GetRegistryNamespacesNamespaceHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetRegistryNamespacesNamespaceRequest struct {
	PathParams GetRegistryNamespacesNamespacePathParams
	Headers    GetRegistryNamespacesNamespaceHeaders
}

type GetRegistryNamespacesNamespaceResponse struct {
	ContentType string
	Namespace   *shared.Namespace
	StatusCode  int64
}
