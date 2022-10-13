package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceXAmzTargetEnum string

const (
	UpdateServiceXAmzTargetEnumRoute53AutoNamingV20170314UpdateService UpdateServiceXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdateService"
)

type UpdateServiceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServiceRequest struct {
	Headers UpdateServiceHeaders
	Request shared.UpdateServiceRequest `request:"mediaType=application/json"`
}

type UpdateServiceResponse struct {
	ContentType           string
	DuplicateRequest      *interface{}
	InvalidInput          *interface{}
	ServiceNotFound       *interface{}
	StatusCode            int64
	UpdateServiceResponse *shared.UpdateServiceResponse
}
