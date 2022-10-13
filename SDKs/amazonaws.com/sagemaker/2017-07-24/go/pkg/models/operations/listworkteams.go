package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkteamsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListWorkteamsXAmzTargetEnum string

const (
	ListWorkteamsXAmzTargetEnumSageMakerListWorkteams ListWorkteamsXAmzTargetEnum = "SageMaker.ListWorkteams"
)

type ListWorkteamsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListWorkteamsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListWorkteamsRequest struct {
	QueryParams ListWorkteamsQueryParams
	Headers     ListWorkteamsHeaders
	Request     shared.ListWorkteamsRequest `request:"mediaType=application/json"`
}

type ListWorkteamsResponse struct {
	ContentType           string
	ListWorkteamsResponse *shared.ListWorkteamsResponse
	StatusCode            int64
}
