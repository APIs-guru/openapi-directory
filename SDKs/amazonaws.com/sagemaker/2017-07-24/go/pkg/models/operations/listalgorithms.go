package operations

import (
	"openapi/pkg/models/shared"
)

type ListAlgorithmsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAlgorithmsXAmzTargetEnum string

const (
	ListAlgorithmsXAmzTargetEnumSageMakerListAlgorithms ListAlgorithmsXAmzTargetEnum = "SageMaker.ListAlgorithms"
)

type ListAlgorithmsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAlgorithmsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAlgorithmsRequest struct {
	QueryParams ListAlgorithmsQueryParams
	Headers     ListAlgorithmsHeaders
	Request     shared.ListAlgorithmsInput `request:"mediaType=application/json"`
}

type ListAlgorithmsResponse struct {
	ContentType          string
	ListAlgorithmsOutput *shared.ListAlgorithmsOutput
	StatusCode           int64
}
