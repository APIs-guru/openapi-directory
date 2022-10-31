package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFunctionPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type UploadFunctionModeEnum string

const (
	UploadFunctionModeEnumEvent UploadFunctionModeEnum = "event"
)

type UploadFunctionRuntimeEnum string

const (
	UploadFunctionRuntimeEnumNodejs UploadFunctionRuntimeEnum = "nodejs"
)

type UploadFunctionQueryParams struct {
	Description *string                   `queryParam:"style=form,explode=true,name=Description"`
	Handler     string                    `queryParam:"style=form,explode=true,name=Handler"`
	MemorySize  *int64                    `queryParam:"style=form,explode=true,name=MemorySize"`
	Mode        UploadFunctionModeEnum    `queryParam:"style=form,explode=true,name=Mode"`
	Role        string                    `queryParam:"style=form,explode=true,name=Role"`
	Runtime     UploadFunctionRuntimeEnum `queryParam:"style=form,explode=true,name=Runtime"`
	Timeout     *int64                    `queryParam:"style=form,explode=true,name=Timeout"`
}

type UploadFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UploadFunctionRequestBody struct {
	FunctionZip string `json:"FunctionZip"`
}

type UploadFunctionRequest struct {
	PathParams  UploadFunctionPathParams
	QueryParams UploadFunctionQueryParams
	Headers     UploadFunctionHeaders
	Request     UploadFunctionRequestBody `request:"mediaType=application/json"`
}

type UploadFunctionResponse struct {
	ContentType                    string
	FunctionConfiguration          *shared.FunctionConfiguration
	InvalidParameterValueException *shared.InvalidParameterValueException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	ServiceException               *shared.ServiceException
	StatusCode                     int64
}
