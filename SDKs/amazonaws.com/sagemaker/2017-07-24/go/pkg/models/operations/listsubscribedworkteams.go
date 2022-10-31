package operations

import (
	"openapi/pkg/models/shared"
)

type ListSubscribedWorkteamsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSubscribedWorkteamsXAmzTargetEnum string

const (
	ListSubscribedWorkteamsXAmzTargetEnumSageMakerListSubscribedWorkteams ListSubscribedWorkteamsXAmzTargetEnum = "SageMaker.ListSubscribedWorkteams"
)

type ListSubscribedWorkteamsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSubscribedWorkteamsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListSubscribedWorkteamsRequest struct {
	QueryParams ListSubscribedWorkteamsQueryParams
	Headers     ListSubscribedWorkteamsHeaders
	Request     shared.ListSubscribedWorkteamsRequest `request:"mediaType=application/json"`
}

type ListSubscribedWorkteamsResponse struct {
	ContentType                     string
	ListSubscribedWorkteamsResponse *shared.ListSubscribedWorkteamsResponse
	StatusCode                      int64
}
