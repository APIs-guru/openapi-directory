package operations

import (
	"openapi/pkg/models/shared"
)

type ListActionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListActionsXAmzTargetEnum string

const (
	ListActionsXAmzTargetEnumSageMakerListActions ListActionsXAmzTargetEnum = "SageMaker.ListActions"
)

type ListActionsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListActionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListActionsRequest struct {
	QueryParams ListActionsQueryParams
	Headers     ListActionsHeaders
	Request     shared.ListActionsRequest `request:"mediaType=application/json"`
}

type ListActionsResponse struct {
	ContentType         string
	ListActionsResponse *shared.ListActionsResponse
	ResourceNotFound    *interface{}
	StatusCode          int64
}
