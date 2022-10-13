package operations

import (
	"openapi/pkg/models/shared"
)

type ListModelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListModelsXAmzTargetEnum string

const (
	ListModelsXAmzTargetEnumSageMakerListModels ListModelsXAmzTargetEnum = "SageMaker.ListModels"
)

type ListModelsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListModelsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListModelsRequest struct {
	QueryParams ListModelsQueryParams
	Headers     ListModelsHeaders
	Request     shared.ListModelsInput `request:"mediaType=application/json"`
}

type ListModelsResponse struct {
	ContentType      string
	ListModelsOutput *shared.ListModelsOutput
	StatusCode       int64
}
