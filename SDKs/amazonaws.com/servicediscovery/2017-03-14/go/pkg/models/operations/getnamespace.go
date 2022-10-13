package operations

import (
	"openapi/pkg/models/shared"
)

type GetNamespaceXAmzTargetEnum string

const (
	GetNamespaceXAmzTargetEnumRoute53AutoNamingV20170314GetNamespace GetNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.GetNamespace"
)

type GetNamespaceHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetNamespaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetNamespaceRequest struct {
	Headers GetNamespaceHeaders
	Request shared.GetNamespaceRequest `request:"mediaType=application/json"`
}

type GetNamespaceResponse struct {
	ContentType          string
	GetNamespaceResponse *shared.GetNamespaceResponse
	InvalidInput         *interface{}
	NamespaceNotFound    *interface{}
	StatusCode           int64
}
