package operations

import (
	"openapi/pkg/models/shared"
)

type ListEngagementsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEngagementsXAmzTargetEnum string

const (
	ListEngagementsXAmzTargetEnumSsmContactsListEngagements ListEngagementsXAmzTargetEnum = "SSMContacts.ListEngagements"
)

type ListEngagementsHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEngagementsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListEngagementsRequest struct {
	QueryParams ListEngagementsQueryParams
	Headers     ListEngagementsHeaders
	Request     shared.ListEngagementsRequest `request:"mediaType=application/json"`
}

type ListEngagementsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListEngagementsResult   *shared.ListEngagementsResult
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
