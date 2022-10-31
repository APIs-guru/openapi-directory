package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateParallelDataXAmzTargetEnum string

const (
	UpdateParallelDataXAmzTargetEnumAwsShineFrontendService20170701UpdateParallelData UpdateParallelDataXAmzTargetEnum = "AWSShineFrontendService_20170701.UpdateParallelData"
)

type UpdateParallelDataHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateParallelDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateParallelDataRequest struct {
	Headers UpdateParallelDataHeaders
	Request shared.UpdateParallelDataRequest `request:"mediaType=application/json"`
}

type UpdateParallelDataResponse struct {
	ConcurrentModificationException *interface{}
	ConflictException               *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	InvalidParameterValueException  *interface{}
	InvalidRequestException         *interface{}
	LimitExceededException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	UpdateParallelDataResponse      *shared.UpdateParallelDataResponse
}
