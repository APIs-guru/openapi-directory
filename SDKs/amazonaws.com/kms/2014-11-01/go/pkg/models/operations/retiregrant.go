package operations

import (
	"openapi/pkg/models/shared"
)

type RetireGrantXAmzTargetEnum string

const (
	RetireGrantXAmzTargetEnumTrentServiceRetireGrant RetireGrantXAmzTargetEnum = "TrentService.RetireGrant"
)

type RetireGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RetireGrantXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RetireGrantRequest struct {
	Headers RetireGrantHeaders
	Request shared.RetireGrantRequest `request:"mediaType=application/json"`
}

type RetireGrantResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	InvalidGrantIDException    *interface{}
	InvalidGrantTokenException *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
