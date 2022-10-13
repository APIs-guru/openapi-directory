package operations

import (
	"openapi/pkg/models/shared"
)

type GetParallelDataXAmzTargetEnum string

const (
	GetParallelDataXAmzTargetEnumAwsShineFrontendService20170701GetParallelData GetParallelDataXAmzTargetEnum = "AWSShineFrontendService_20170701.GetParallelData"
)

type GetParallelDataHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetParallelDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetParallelDataRequest struct {
	Headers GetParallelDataHeaders
	Request shared.GetParallelDataRequest `request:"mediaType=application/json"`
}

type GetParallelDataResponse struct {
	ContentType                    string
	GetParallelDataResponse        *shared.GetParallelDataResponse
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
