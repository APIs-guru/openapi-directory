package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFunctionConfigurationPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type UpdateFunctionConfigurationQueryParams struct {
	Description *string `queryParam:"style=form,explode=true,name=Description"`
	Handler     *string `queryParam:"style=form,explode=true,name=Handler"`
	MemorySize  *int64  `queryParam:"style=form,explode=true,name=MemorySize"`
	Role        *string `queryParam:"style=form,explode=true,name=Role"`
	Timeout     *int64  `queryParam:"style=form,explode=true,name=Timeout"`
}

type UpdateFunctionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFunctionConfigurationRequest struct {
	PathParams  UpdateFunctionConfigurationPathParams
	QueryParams UpdateFunctionConfigurationQueryParams
	Headers     UpdateFunctionConfigurationHeaders
}

type UpdateFunctionConfigurationResponse struct {
	ContentType                    string
	FunctionConfiguration          *shared.FunctionConfiguration
	InvalidParameterValueException *shared.InvalidParameterValueException
	ResourceNotFoundException      *shared.ResourceNotFoundException
	ServiceException               *shared.ServiceException
	StatusCode                     int64
}
