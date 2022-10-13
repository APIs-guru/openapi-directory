package operations

import (
	"openapi/pkg/models/shared"
)

type ListKeyPoliciesQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=Limit"`
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListKeyPoliciesXAmzTargetEnum string

const (
	ListKeyPoliciesXAmzTargetEnumTrentServiceListKeyPolicies ListKeyPoliciesXAmzTargetEnum = "TrentService.ListKeyPolicies"
)

type ListKeyPoliciesHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListKeyPoliciesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListKeyPoliciesRequest struct {
	QueryParams ListKeyPoliciesQueryParams
	Headers     ListKeyPoliciesHeaders
	Request     shared.ListKeyPoliciesRequest `request:"mediaType=application/json"`
}

type ListKeyPoliciesResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	ListKeyPoliciesResponse    *shared.ListKeyPoliciesResponse
	NotFoundException          *interface{}
	StatusCode                 int64
}
