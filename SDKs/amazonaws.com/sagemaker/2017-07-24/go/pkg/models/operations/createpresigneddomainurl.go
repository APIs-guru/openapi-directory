package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePresignedDomainURLXAmzTargetEnum string

const (
	CreatePresignedDomainURLXAmzTargetEnumSageMakerCreatePresignedDomainURL CreatePresignedDomainURLXAmzTargetEnum = "SageMaker.CreatePresignedDomainUrl"
)

type CreatePresignedDomainURLHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePresignedDomainURLXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
