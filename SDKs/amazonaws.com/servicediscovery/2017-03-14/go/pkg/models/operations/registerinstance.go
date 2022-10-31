package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterInstanceXAmzTargetEnum string

const (
	RegisterInstanceXAmzTargetEnumRoute53AutoNamingV20170314RegisterInstance RegisterInstanceXAmzTargetEnum = "Route53AutoNaming_v20170314.RegisterInstance"
)

type RegisterInstanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
