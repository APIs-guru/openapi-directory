package operations

import (
	"openapi/pkg/models/shared"
)

type ListParentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListParentsXAmzTargetEnum string

const (
	ListParentsXAmzTargetEnumAwsOrganizationsV20161128ListParents ListParentsXAmzTargetEnum = "AWSOrganizationsV20161128.ListParents"
)

type ListParentsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListParentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListParentsRequest struct {
	QueryParams ListParentsQueryParams
	Headers     ListParentsHeaders
	Request     shared.ListParentsRequest `request:"mediaType=application/json"`
}

type ListParentsResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ChildNotFoundException            *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListParentsResponse               *shared.ListParentsResponse
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
