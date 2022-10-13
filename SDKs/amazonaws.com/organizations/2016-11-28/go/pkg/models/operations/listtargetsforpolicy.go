package operations

import (
	"openapi/pkg/models/shared"
)

type ListTargetsForPolicyQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTargetsForPolicyXAmzTargetEnum string

const (
	ListTargetsForPolicyXAmzTargetEnumAwsOrganizationsV20161128ListTargetsForPolicy ListTargetsForPolicyXAmzTargetEnum = "AWSOrganizationsV20161128.ListTargetsForPolicy"
)

type ListTargetsForPolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTargetsForPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTargetsForPolicyRequest struct {
	QueryParams ListTargetsForPolicyQueryParams
	Headers     ListTargetsForPolicyHeaders
	Request     shared.ListTargetsForPolicyRequest `request:"mediaType=application/json"`
}

type ListTargetsForPolicyResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListTargetsForPolicyResponse      *shared.ListTargetsForPolicyResponse
	PolicyNotFoundException           *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
