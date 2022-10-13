package operations

import (
	"openapi/pkg/models/shared"
)

type PublishVersionPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type PublishVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PublishVersionRequestBody struct {
	CodeSha256  *string `json:"CodeSha256"`
	Description *string `json:"Description"`
	RevisionID  *string `json:"RevisionId"`
}

type PublishVersionRequest struct {
	PathParams PublishVersionPathParams
	Headers    PublishVersionHeaders
	Request    PublishVersionRequestBody `request:"mediaType=application/json"`
}

type PublishVersionResponse struct {
	CodeStorageExceededException   *interface{}
	ContentType                    string
	FunctionConfiguration          *shared.FunctionConfiguration
	InvalidParameterValueException *interface{}
	PreconditionFailedException    *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
