package operations

import (
	"openapi/pkg/models/shared"
)

type DetectModerationLabelsXAmzTargetEnum string

const (
	DetectModerationLabelsXAmzTargetEnumRekognitionServiceDetectModerationLabels DetectModerationLabelsXAmzTargetEnum = "RekognitionService.DetectModerationLabels"
)

type DetectModerationLabelsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectModerationLabelsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetectModerationLabelsRequest struct {
	Headers DetectModerationLabelsHeaders
	Request shared.DetectModerationLabelsRequest `request:"mediaType=application/json"`
}

type DetectModerationLabelsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DetectModerationLabelsResponse         *shared.DetectModerationLabelsResponse
	HumanLoopQuotaExceededException        *interface{}
	ImageTooLargeException                 *interface{}
	InternalServerError                    *interface{}
	InvalidImageFormatException            *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
