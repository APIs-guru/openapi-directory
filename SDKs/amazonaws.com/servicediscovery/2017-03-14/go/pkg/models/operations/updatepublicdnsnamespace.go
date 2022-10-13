package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePublicDNSNamespaceXAmzTargetEnum string

const (
	UpdatePublicDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314UpdatePublicDNSNamespace UpdatePublicDNSNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdatePublicDnsNamespace"
)

type UpdatePublicDNSNamespaceHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePublicDNSNamespaceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePublicDNSNamespaceRequest struct {
	Headers UpdatePublicDNSNamespaceHeaders
	Request shared.UpdatePublicDNSNamespaceRequest `request:"mediaType=application/json"`
}

type UpdatePublicDNSNamespaceResponse struct {
	ContentType                      string
	DuplicateRequest                 *interface{}
	InvalidInput                     *interface{}
	NamespaceNotFound                *interface{}
	ResourceInUse                    *interface{}
	StatusCode                       int64
	UpdatePublicDNSNamespaceResponse *shared.UpdatePublicDNSNamespaceResponse
}
