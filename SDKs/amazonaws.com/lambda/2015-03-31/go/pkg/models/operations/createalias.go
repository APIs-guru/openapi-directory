package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAliasPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type CreateAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAliasRequestBodyRoutingConfig struct {
	AdditionalVersionWeights map[string]float64 `json:"AdditionalVersionWeights"`
}

type CreateAliasRequestBody struct {
	Description     *string                              `json:"Description"`
	FunctionVersion string                               `json:"FunctionVersion"`
	Name            string                               `json:"Name"`
	RoutingConfig   *CreateAliasRequestBodyRoutingConfig `json:"RoutingConfig"`
}

type CreateAliasRequest struct {
	PathParams CreateAliasPathParams
	Headers    CreateAliasHeaders
	Request    CreateAliasRequestBody `request:"mediaType=application/json"`
}

type CreateAliasResponse struct {
	AliasConfiguration             *shared.AliasConfiguration
	ContentType                    string
	InvalidParameterValueException *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
