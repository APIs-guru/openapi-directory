package operations

import (
	"openapi/pkg/models/shared"
)

type ListDelegatedServicesForAccountQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDelegatedServicesForAccountXAmzTargetEnum string

const (
	ListDelegatedServicesForAccountXAmzTargetEnumAwsOrganizationsV20161128ListDelegatedServicesForAccount ListDelegatedServicesForAccountXAmzTargetEnum = "AWSOrganizationsV20161128.ListDelegatedServicesForAccount"
)

type ListDelegatedServicesForAccountHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDelegatedServicesForAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDelegatedServicesForAccountRequest struct {
	QueryParams ListDelegatedServicesForAccountQueryParams
	Headers     ListDelegatedServicesForAccountHeaders
	Request     shared.ListDelegatedServicesForAccountRequest `request:"mediaType=application/json"`
}

type ListDelegatedServicesForAccountResponse struct {
	AwsOrganizationsNotInUseException       *interface{}
	AccessDeniedException                   *interface{}
	AccountNotFoundException                *interface{}
	AccountNotRegisteredException           *interface{}
	ConstraintViolationException            *interface{}
	ContentType                             string
	InvalidInputException                   *interface{}
	ListDelegatedServicesForAccountResponse *shared.ListDelegatedServicesForAccountResponse
	ServiceException                        *interface{}
	StatusCode                              int64
	TooManyRequestsException                *interface{}
	UnsupportedAPIEndpointException         *interface{}
}
