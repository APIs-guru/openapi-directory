package operations

import (
	"openapi/pkg/models/shared"
)

type GetNamespaceXAmzTargetEnum string

const (
	GetNamespaceXAmzTargetEnumRoute53AutoNamingV20170314GetNamespace GetNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.GetNamespace"
)

type GetNamespaceHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetNamespaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
