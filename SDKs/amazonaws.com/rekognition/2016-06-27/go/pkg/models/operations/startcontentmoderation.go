package operations

import (
	"openapi/pkg/models/shared"
)

type StartContentModerationXAmzTargetEnum string

const (
	StartContentModerationXAmzTargetEnumRekognitionServiceStartContentModeration StartContentModerationXAmzTargetEnum = "RekognitionService.StartContentModeration"
)

type StartContentModerationHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartContentModerationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartContentModerationRequest struct {
	Headers StartContentModerationHeaders
	Request shared.StartContentModerationRequest `request:"mediaType=application/json"`
}

type StartContentModerationResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	StartContentModerationResponse         *shared.StartContentModerationResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	VideoTooLargeException                 *interface{}
}
