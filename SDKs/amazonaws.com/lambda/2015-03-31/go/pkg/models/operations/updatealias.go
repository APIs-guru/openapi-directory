package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAliasPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
	Name         string `pathParam:"style=simple,explode=false,name=Name"`
}

type UpdateAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAliasRequestBodyRoutingConfig struct {
	AdditionalVersionWeights map[string]float64 `json:"AdditionalVersionWeights"`
}

type UpdateAliasRequestBody struct {
	Description     *string                              `json:"Description"`
	FunctionVersion *string                              `json:"FunctionVersion"`
	RevisionID      *string                              `json:"RevisionId"`
	RoutingConfig   *UpdateAliasRequestBodyRoutingConfig `json:"RoutingConfig"`
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
