package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServiceXAmzTargetEnum string

const (
	CreateServiceXAmzTargetEnumAwsProton20200720CreateService CreateServiceXAmzTargetEnum = "AwsProton20200720.CreateService"
)

type CreateServiceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateServiceRequest struct {
	Headers CreateServiceHeaders
	Request shared.CreateServiceInput `request:"mediaType=application/json"`
}

type CreateServiceResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateServiceOutput           *shared.CreateServiceOutput
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
