package operations

import (
	"openapi/pkg/models/shared"
)

type RecognizeCelebritiesXAmzTargetEnum string

const (
	RecognizeCelebritiesXAmzTargetEnumRekognitionServiceRecognizeCelebrities RecognizeCelebritiesXAmzTargetEnum = "RekognitionService.RecognizeCelebrities"
)

type RecognizeCelebritiesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RecognizeCelebritiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RecognizeCelebritiesRequest struct {
	Headers RecognizeCelebritiesHeaders
	Request shared.RecognizeCelebritiesRequest `request:"mediaType=application/json"`
}

type RecognizeCelebritiesResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	ImageTooLargeException                 *interface{}
	InternalServerError                    *interface{}
	InvalidImageFormatException            *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	ProvisionedThroughputExceededException *interface{}
	RecognizeCelebritiesResponse           *shared.RecognizeCelebritiesResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
