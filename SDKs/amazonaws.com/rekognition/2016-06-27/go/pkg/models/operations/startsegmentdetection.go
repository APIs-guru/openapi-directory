package operations

import (
	"openapi/pkg/models/shared"
)

type StartSegmentDetectionXAmzTargetEnum string

const (
	StartSegmentDetectionXAmzTargetEnumRekognitionServiceStartSegmentDetection StartSegmentDetectionXAmzTargetEnum = "RekognitionService.StartSegmentDetection"
)

type StartSegmentDetectionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSegmentDetectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartSegmentDetectionRequest struct {
	Headers StartSegmentDetectionHeaders
	Request shared.StartSegmentDetectionRequest `request:"mediaType=application/json"`
}

type StartSegmentDetectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	StartSegmentDetectionResponse          *shared.StartSegmentDetectionResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	VideoTooLargeException                 *interface{}
}
