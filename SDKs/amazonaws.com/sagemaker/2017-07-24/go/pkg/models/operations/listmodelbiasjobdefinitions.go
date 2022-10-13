package operations

import (
	"openapi/pkg/models/shared"
)

type ListModelBiasJobDefinitionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListModelBiasJobDefinitionsXAmzTargetEnum string

const (
	ListModelBiasJobDefinitionsXAmzTargetEnumSageMakerListModelBiasJobDefinitions ListModelBiasJobDefinitionsXAmzTargetEnum = "SageMaker.ListModelBiasJobDefinitions"
)

type ListModelBiasJobDefinitionsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListModelBiasJobDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListModelBiasJobDefinitionsRequest struct {
	QueryParams ListModelBiasJobDefinitionsQueryParams
	Headers     ListModelBiasJobDefinitionsHeaders
	Request     shared.ListModelBiasJobDefinitionsRequest `request:"mediaType=application/json"`
}

type ListModelBiasJobDefinitionsResponse struct {
	ContentType                         string
	ListModelBiasJobDefinitionsResponse *shared.ListModelBiasJobDefinitionsResponse
	StatusCode                          int64
}
