package operations

import (
	"openapi/pkg/models/shared"
)

type PutFunctionConcurrencyPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type PutFunctionConcurrencyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutFunctionConcurrencyRequestBody struct {
	ReservedConcurrentExecutions int64 `json:"ReservedConcurrentExecutions"`
}

type PutFunctionConcurrencyRequest struct {
	PathParams PutFunctionConcurrencyPathParams
	Headers    PutFunctionConcurrencyHeaders
	Request    PutFunctionConcurrencyRequestBody `request:"mediaType=application/json"`
}

type PutFunctionConcurrencyResponse struct {
	Concurrency                    *shared.Concurrency
	ContentType                    string
	InvalidParameterValueException *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
