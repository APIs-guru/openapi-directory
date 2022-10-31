package operations

import (
	"openapi/pkg/models/shared"
)

type StartPersonTrackingXAmzTargetEnum string

const (
	StartPersonTrackingXAmzTargetEnumRekognitionServiceStartPersonTracking StartPersonTrackingXAmzTargetEnum = "RekognitionService.StartPersonTracking"
)

type StartPersonTrackingHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartPersonTrackingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartPersonTrackingRequest struct {
	Headers StartPersonTrackingHeaders
	Request shared.StartPersonTrackingRequest `request:"mediaType=application/json"`
}

type StartPersonTrackingResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	IdempotentParameterMismatchException   *interface{}
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	InvalidS3ObjectException               *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	StartPersonTrackingResponse            *shared.StartPersonTrackingResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
	VideoTooLargeException                 *interface{}
}
