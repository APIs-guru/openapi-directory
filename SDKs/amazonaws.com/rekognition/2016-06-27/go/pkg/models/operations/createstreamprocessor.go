package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamProcessorXAmzTargetEnum string

const (
	CreateStreamProcessorXAmzTargetEnumRekognitionServiceCreateStreamProcessor CreateStreamProcessorXAmzTargetEnum = "RekognitionService.CreateStreamProcessor"
)

type CreateStreamProcessorHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStreamProcessorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateStreamProcessorRequest struct {
	Headers CreateStreamProcessorHeaders
	Request shared.CreateStreamProcessorRequest `request:"mediaType=application/json"`
}

type CreateStreamProcessorResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateStreamProcessorResponse          *shared.CreateStreamProcessorResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
