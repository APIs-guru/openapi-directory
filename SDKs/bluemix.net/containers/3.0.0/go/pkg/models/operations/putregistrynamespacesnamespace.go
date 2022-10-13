package operations

import (
	"openapi/pkg/models/shared"
)

type PutRegistryNamespacesNamespacePathParams struct {
	Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
}

type PutRegistryNamespacesNamespaceHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PutRegistryNamespacesNamespaceRequest struct {
	PathParams PutRegistryNamespacesNamespacePathParams
	Headers    PutRegistryNamespacesNamespaceHeaders
}

type PutRegistryNamespacesNamespaceResponse struct {
	ContentType string
	Namespace   *shared.Namespace
	StatusCode  int64
}
