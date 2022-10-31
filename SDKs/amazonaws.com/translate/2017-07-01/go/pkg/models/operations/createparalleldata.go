package operations

import (
	"openapi/pkg/models/shared"
)

type CreateParallelDataXAmzTargetEnum string

const (
	CreateParallelDataXAmzTargetEnumAwsShineFrontendService20170701CreateParallelData CreateParallelDataXAmzTargetEnum = "AWSShineFrontendService_20170701.CreateParallelData"
)

type CreateParallelDataHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateParallelDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateParallelDataRequest struct {
	Headers CreateParallelDataHeaders
	Request shared.CreateParallelDataRequest `request:"mediaType=application/json"`
}

type CreateParallelDataResponse struct {
	ConflictException              *interface{}
	ContentType                    string
	CreateParallelDataResponse     *shared.CreateParallelDataResponse
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
