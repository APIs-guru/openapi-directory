package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterInstanceXAmzTargetEnum string

const (
	RegisterInstanceXAmzTargetEnumRoute53AutoNamingV20170314RegisterInstance RegisterInstanceXAmzTargetEnum = "Route53AutoNaming_v20170314.RegisterInstance"
)

type RegisterInstanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterInstanceRequest struct {
	Headers RegisterInstanceHeaders
	Request shared.RegisterInstanceRequest `request:"mediaType=application/json"`
}

type RegisterInstanceResponse struct {
	ContentType              string
	DuplicateRequest         *interface{}
	InvalidInput             *interface{}
	RegisterInstanceResponse *shared.RegisterInstanceResponse
	ResourceInUse            *interface{}
	ResourceLimitExceeded    *interface{}
	ServiceNotFound          *interface{}
	StatusCode               int64
}
