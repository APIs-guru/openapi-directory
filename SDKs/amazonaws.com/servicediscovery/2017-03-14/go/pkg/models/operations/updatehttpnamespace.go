package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateHTTPNamespaceXAmzTargetEnum string

const (
	UpdateHTTPNamespaceXAmzTargetEnumRoute53AutoNamingV20170314UpdateHTTPNamespace UpdateHTTPNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdateHttpNamespace"
)

type UpdateHTTPNamespaceHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateHTTPNamespaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateHTTPNamespaceRequest struct {
	Headers UpdateHTTPNamespaceHeaders
	Request shared.UpdateHTTPNamespaceRequest `request:"mediaType=application/json"`
}

type UpdateHTTPNamespaceResponse struct {
	ContentType                 string
	DuplicateRequest            *interface{}
	InvalidInput                *interface{}
	NamespaceNotFound           *interface{}
	ResourceInUse               *interface{}
	StatusCode                  int64
	UpdateHTTPNamespaceResponse *shared.UpdateHTTPNamespaceResponse
}
