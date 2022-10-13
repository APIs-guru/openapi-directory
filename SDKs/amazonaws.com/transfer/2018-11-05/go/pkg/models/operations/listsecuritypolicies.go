package operations

import (
	"openapi/pkg/models/shared"
)

type ListSecurityPoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSecurityPoliciesXAmzTargetEnum string

const (
	ListSecurityPoliciesXAmzTargetEnumTransferServiceListSecurityPolicies ListSecurityPoliciesXAmzTargetEnum = "TransferService.ListSecurityPolicies"
)

type ListSecurityPoliciesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSecurityPoliciesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSecurityPoliciesRequest struct {
	QueryParams ListSecurityPoliciesQueryParams
	Headers     ListSecurityPoliciesHeaders
	Request     shared.ListSecurityPoliciesRequest `request:"mediaType=application/json"`
}

type ListSecurityPoliciesResponse struct {
	ContentType                  string
	InternalServiceError         *interface{}
	InvalidNextTokenException    *interface{}
	InvalidRequestException      *interface{}
	ListSecurityPoliciesResponse *shared.ListSecurityPoliciesResponse
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
}
