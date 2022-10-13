package operations

import (
	"openapi/pkg/models/shared"
)

type ListPoliciesForTargetQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPoliciesForTargetXAmzTargetEnum string

const (
	ListPoliciesForTargetXAmzTargetEnumAwsOrganizationsV20161128ListPoliciesForTarget ListPoliciesForTargetXAmzTargetEnum = "AWSOrganizationsV20161128.ListPoliciesForTarget"
)

type ListPoliciesForTargetHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPoliciesForTargetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPoliciesForTargetRequest struct {
	QueryParams ListPoliciesForTargetQueryParams
	Headers     ListPoliciesForTargetHeaders
	Request     shared.ListPoliciesForTargetRequest `request:"mediaType=application/json"`
}

type ListPoliciesForTargetResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListPoliciesForTargetResponse     *shared.ListPoliciesForTargetResponse
	ServiceException                  *interface{}
	StatusCode                        int64
	TargetNotFoundException           *interface{}
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
