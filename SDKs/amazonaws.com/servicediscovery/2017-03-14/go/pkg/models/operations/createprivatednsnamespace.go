package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePrivateDNSNamespaceXAmzTargetEnum string

const (
	CreatePrivateDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314CreatePrivateDNSNamespace CreatePrivateDNSNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace"
)

type CreatePrivateDNSNamespaceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePrivateDNSNamespaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePrivateDNSNamespaceRequest struct {
	Headers CreatePrivateDNSNamespaceHeaders
	Request shared.CreatePrivateDNSNamespaceRequest `request:"mediaType=application/json"`
}

type CreatePrivateDNSNamespaceResponse struct {
	ContentType                       string
	CreatePrivateDNSNamespaceResponse *shared.CreatePrivateDNSNamespaceResponse
	DuplicateRequest                  *interface{}
	InvalidInput                      *interface{}
	NamespaceAlreadyExists            *interface{}
	ResourceLimitExceeded             *interface{}
	StatusCode                        int64
	TooManyTagsException              *interface{}
}
