package operations

import (
	"openapi/pkg/models/shared"
)

type ListTrialComponentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTrialComponentsXAmzTargetEnum string

const (
	ListTrialComponentsXAmzTargetEnumSageMakerListTrialComponents ListTrialComponentsXAmzTargetEnum = "SageMaker.ListTrialComponents"
)

type ListTrialComponentsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTrialComponentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTrialComponentsRequest struct {
	QueryParams ListTrialComponentsQueryParams
	Headers     ListTrialComponentsHeaders
	Request     shared.ListTrialComponentsRequest `request:"mediaType=application/json"`
}

type ListTrialComponentsResponse struct {
	ContentType                 string
	ListTrialComponentsResponse *shared.ListTrialComponentsResponse
	ResourceNotFound            *interface{}
	StatusCode                  int64
}
