package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePresignedDomainURLXAmzTargetEnum string

const (
	CreatePresignedDomainURLXAmzTargetEnumSageMakerCreatePresignedDomainURL CreatePresignedDomainURLXAmzTargetEnum = "SageMaker.CreatePresignedDomainUrl"
)

type CreatePresignedDomainURLHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePresignedDomainURLXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePresignedDomainURLRequest struct {
	Headers CreatePresignedDomainURLHeaders
	Request shared.CreatePresignedDomainURLRequest `request:"mediaType=application/json"`
}

type CreatePresignedDomainURLResponse struct {
	ContentType                      string
	CreatePresignedDomainURLResponse *shared.CreatePresignedDomainURLResponse
	ResourceNotFound                 *interface{}
	StatusCode                       int64
}
