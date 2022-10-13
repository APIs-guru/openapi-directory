package operations

import (
	"openapi/pkg/models/shared"
)

type ListPoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPoliciesXAmzTargetEnum string

const (
	ListPoliciesXAmzTargetEnumAwsOrganizationsV20161128ListPolicies ListPoliciesXAmzTargetEnum = "AWSOrganizationsV20161128.ListPolicies"
)

type ListPoliciesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPoliciesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPoliciesRequest struct {
	QueryParams ListPoliciesQueryParams
	Headers     ListPoliciesHeaders
	Request     shared.ListPoliciesRequest `request:"mediaType=application/json"`
}

type ListPoliciesResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListPoliciesResponse              *shared.ListPoliciesResponse
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
