package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAliasPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type CreateAliasHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateAliasRequestBodyRoutingConfig
// The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
type CreateAliasRequestBodyRoutingConfig struct {
	AdditionalVersionWeights map[string]float64 `json:"AdditionalVersionWeights,omitempty"`
}

type CreateAliasRequestBody struct {
	Description     *string                              `json:"Description,omitempty"`
	FunctionVersion string                               `json:"FunctionVersion"`
	Name            string                               `json:"Name"`
	RoutingConfig   *CreateAliasRequestBodyRoutingConfig `json:"RoutingConfig,omitempty"`
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
