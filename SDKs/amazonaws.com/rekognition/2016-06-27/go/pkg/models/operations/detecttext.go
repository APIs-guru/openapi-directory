package operations

import (
	"openapi/pkg/models/shared"
)

type DetectTextXAmzTargetEnum string

const (
	DetectTextXAmzTargetEnumRekognitionServiceDetectText DetectTextXAmzTargetEnum = "RekognitionService.DetectText"
)

type DetectTextHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectTextXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetectTextRequest struct {
	Headers DetectTextHeaders
	Request shared.DetectTextRequest `request:"mediaType=application/json"`
}

type DetectTextResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DetectTextResponse                     *shared.DetectTextResponse
	ImageTooLargeException                 *interface{}
	InternalServerError                    *interface{}
	InvalidImageFormatException            *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
