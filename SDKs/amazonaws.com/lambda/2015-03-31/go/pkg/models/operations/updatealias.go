package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAliasPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
	Name         string `pathParam:"style=simple,explode=false,name=Name"`
}

type UpdateAliasHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateAliasRequestBodyRoutingConfig
// The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
type UpdateAliasRequestBodyRoutingConfig struct {
	AdditionalVersionWeights map[string]float64 `json:"AdditionalVersionWeights,omitempty"`
}

type UpdateAliasRequestBody struct {
	Description     *string                              `json:"Description,omitempty"`
	FunctionVersion *string                              `json:"FunctionVersion,omitempty"`
	RevisionID      *string                              `json:"RevisionId,omitempty"`
	RoutingConfig   *UpdateAliasRequestBodyRoutingConfig `json:"RoutingConfig,omitempty"`
}

type UpdateAliasRequest struct {
	PathParams UpdateAliasPathParams
	Headers    UpdateAliasHeaders
	Request    UpdateAliasRequestBody `request:"mediaType=application/json"`
}

type UpdateAliasResponse struct {
	AliasConfiguration             *shared.AliasConfiguration
	ContentType                    string
	InvalidParameterValueException *interface{}
	PreconditionFailedException    *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
