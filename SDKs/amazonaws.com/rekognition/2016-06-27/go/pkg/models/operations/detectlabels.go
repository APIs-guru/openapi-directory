package operations

import (
	"openapi/pkg/models/shared"
)

type DetectLabelsXAmzTargetEnum string

const (
	DetectLabelsXAmzTargetEnumRekognitionServiceDetectLabels DetectLabelsXAmzTargetEnum = "RekognitionService.DetectLabels"
)

type DetectLabelsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectLabelsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetectLabelsRequest struct {
	Headers DetectLabelsHeaders
	Request shared.DetectLabelsRequest `request:"mediaType=application/json"`
}

type DetectLabelsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DetectLabelsResponse                   *shared.DetectLabelsResponse
	ImageTooLargeException                 *interface{}
	InternalServerError                    *interface{}
	InvalidImageFormatException            *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
