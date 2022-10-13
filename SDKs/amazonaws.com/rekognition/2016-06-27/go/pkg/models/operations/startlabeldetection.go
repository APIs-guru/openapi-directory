package operations

import (
	"openapi/pkg/models/shared"
)

type StartLabelDetectionXAmzTargetEnum string

const (
	StartLabelDetectionXAmzTargetEnumRekognitionServiceStartLabelDetection StartLabelDetectionXAmzTargetEnum = "RekognitionService.StartLabelDetection"
)

type StartLabelDetectionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartLabelDetectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartLabelDetectionRequest struct {
	Headers StartLabelDetectionHeaders
	Request shared.StartLabelDetectionRequest `request:"mediaType=application/json"`
}

type StartLabelDetectionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	StartLabelDetectionResponse            *shared.StartLabelDetectionResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	VideoTooLargeException                 *interface{}
}
