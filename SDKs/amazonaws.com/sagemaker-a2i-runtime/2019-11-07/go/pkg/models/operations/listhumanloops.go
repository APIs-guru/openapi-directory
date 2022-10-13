package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListHumanLoopsSortOrderEnum string

const (
	ListHumanLoopsSortOrderEnumAscending  ListHumanLoopsSortOrderEnum = "Ascending"
	ListHumanLoopsSortOrderEnumDescending ListHumanLoopsSortOrderEnum = "Descending"
)

type ListHumanLoopsQueryParams struct {
	CreationTimeAfter  *time.Time                   `queryParam:"style=form,explode=true,name=CreationTimeAfter"`
	CreationTimeBefore *time.Time                   `queryParam:"style=form,explode=true,name=CreationTimeBefore"`
	FlowDefinitionArn  string                       `queryParam:"style=form,explode=true,name=FlowDefinitionArn"`
	MaxResults         *int64                       `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken          *string                      `queryParam:"style=form,explode=true,name=NextToken"`
	SortOrder          *ListHumanLoopsSortOrderEnum `queryParam:"style=form,explode=true,name=SortOrder"`
}

type ListHumanLoopsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListHumanLoopsRequest struct {
	QueryParams ListHumanLoopsQueryParams
	Headers     ListHumanLoopsHeaders
}

type ListHumanLoopsResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ListHumanLoopsResponse    *shared.ListHumanLoopsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
