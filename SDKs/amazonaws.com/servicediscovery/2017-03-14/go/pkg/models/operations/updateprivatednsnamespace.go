package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePrivateDNSNamespaceXAmzTargetEnum string

const (
	UpdatePrivateDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314UpdatePrivateDNSNamespace UpdatePrivateDNSNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace"
)

type UpdatePrivateDNSNamespaceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePrivateDNSNamespaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePrivateDNSNamespaceRequest struct {
	Headers UpdatePrivateDNSNamespaceHeaders
	Request shared.UpdatePrivateDNSNamespaceRequest `request:"mediaType=application/json"`
}

type UpdatePrivateDNSNamespaceResponse struct {
	ContentType                       string
	DuplicateRequest                  *interface{}
	InvalidInput                      *interface{}
	NamespaceNotFound                 *interface{}
	ResourceInUse                     *interface{}
	StatusCode                        int64
	UpdatePrivateDNSNamespaceResponse *shared.UpdatePrivateDNSNamespaceResponse
}
