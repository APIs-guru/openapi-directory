package operations

import (
	"openapi/pkg/models/shared"
)

type StartCelebrityRecognitionXAmzTargetEnum string

const (
	StartCelebrityRecognitionXAmzTargetEnumRekognitionServiceStartCelebrityRecognition StartCelebrityRecognitionXAmzTargetEnum = "RekognitionService.StartCelebrityRecognition"
)

type StartCelebrityRecognitionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartCelebrityRecognitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartCelebrityRecognitionRequest struct {
	Headers StartCelebrityRecognitionHeaders
	Request shared.StartCelebrityRecognitionRequest `request:"mediaType=application/json"`
}

type StartCelebrityRecognitionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	StartCelebrityRecognitionResponse      *shared.StartCelebrityRecognitionResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	VideoTooLargeException                 *interface{}
}
