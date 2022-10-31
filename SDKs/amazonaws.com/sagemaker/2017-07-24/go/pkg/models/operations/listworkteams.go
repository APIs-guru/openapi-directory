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
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListWorkteamsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
