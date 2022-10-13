package operations

import (
	"openapi/pkg/models/shared"
)

type StartFaceSearchXAmzTargetEnum string

const (
	StartFaceSearchXAmzTargetEnumRekognitionServiceStartFaceSearch StartFaceSearchXAmzTargetEnum = "RekognitionService.StartFaceSearch"
)

type StartFaceSearchHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartFaceSearchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartFaceSearchRequest struct {
	Headers StartFaceSearchHeaders
	Request shared.StartFaceSearchRequest `request:"mediaType=application/json"`
}

type StartFaceSearchResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StartFaceSearchResponse                *shared.StartFaceSearchResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	VideoTooLargeException                 *interface{}
}
