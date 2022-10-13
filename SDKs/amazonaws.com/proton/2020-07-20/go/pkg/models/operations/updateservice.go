package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceXAmzTargetEnum string

const (
	UpdateServiceXAmzTargetEnumAwsProton20200720UpdateService UpdateServiceXAmzTargetEnum = "AwsProton20200720.UpdateService"
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
	Request shared.UpdateServiceInput `request:"mediaType=application/json"`
}

type UpdateServiceResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateServiceOutput           *shared.UpdateServiceOutput
	ValidationException           *interface{}
}
