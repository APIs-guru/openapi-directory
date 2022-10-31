package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEnvironmentXAmzTargetEnum string

const (
	DeleteEnvironmentXAmzTargetEnumAwsProton20200720DeleteEnvironment DeleteEnvironmentXAmzTargetEnum = "AwsProton20200720.DeleteEnvironment"
)

type DeleteEnvironmentHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEnvironmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteEnvironmentRequest struct {
	Headers DeleteEnvironmentHeaders
	Request shared.DeleteEnvironmentInput `request:"mediaType=application/json"`
}

type DeleteEnvironmentResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	DeleteEnvironmentOutput   *shared.DeleteEnvironmentOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
