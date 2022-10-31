package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGrantXAmzTargetEnum string

const (
	CreateGrantXAmzTargetEnumTrentServiceCreateGrant CreateGrantXAmzTargetEnum = "TrentService.CreateGrant"
)

type CreateGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGrantXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateGrantRequest struct {
	Headers CreateGrantHeaders
	Request shared.CreateGrantRequest `request:"mediaType=application/json"`
}

type CreateGrantResponse struct {
	ContentType                string
	CreateGrantResponse        *shared.CreateGrantResponse
	DependencyTimeoutException *interface{}
	DisabledException          *interface{}
	InvalidArnException        *interface{}
	InvalidGrantTokenException *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	LimitExceededException     *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
