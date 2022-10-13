package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteParallelDataXAmzTargetEnum string

const (
	DeleteParallelDataXAmzTargetEnumAwsShineFrontendService20170701DeleteParallelData DeleteParallelDataXAmzTargetEnum = "AWSShineFrontendService_20170701.DeleteParallelData"
)

type DeleteParallelDataHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteParallelDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteParallelDataRequest struct {
	Headers DeleteParallelDataHeaders
	Request shared.DeleteParallelDataRequest `request:"mediaType=application/json"`
}

type DeleteParallelDataResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteParallelDataResponse      *shared.DeleteParallelDataResponse
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
