package operations

import (
	"openapi/pkg/models/shared"
)

type StopTextTranslationJobXAmzTargetEnum string

const (
	StopTextTranslationJobXAmzTargetEnumAwsShineFrontendService20170701StopTextTranslationJob StopTextTranslationJobXAmzTargetEnum = "AWSShineFrontendService_20170701.StopTextTranslationJob"
)

type StopTextTranslationJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopTextTranslationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopTextTranslationJobRequest struct {
	Headers StopTextTranslationJobHeaders
	Request shared.StopTextTranslationJobRequest `request:"mediaType=application/json"`
}

type StopTextTranslationJobResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	StopTextTranslationJobResponse *shared.StopTextTranslationJobResponse
	TooManyRequestsException       *interface{}
}
