package operations

import (
	"openapi/pkg/models/shared"
)

type StartTextDetectionXAmzTargetEnum string

const (
	StartTextDetectionXAmzTargetEnumRekognitionServiceStartTextDetection StartTextDetectionXAmzTargetEnum = "RekognitionService.StartTextDetection"
)

type StartTextDetectionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartTextDetectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartTextDetectionRequest struct {
	Headers StartTextDetectionHeaders
	Request shared.StartTextDetectionRequest `request:"mediaType=application/json"`
}

type StartTextDetectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	StartTextDetectionResponse             *shared.StartTextDetectionResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	VideoTooLargeException                 *interface{}
}
