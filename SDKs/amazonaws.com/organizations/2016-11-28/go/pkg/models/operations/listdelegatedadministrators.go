package operations

import (
	"openapi/pkg/models/shared"
)

type ListDelegatedAdministratorsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDelegatedAdministratorsXAmzTargetEnum string

const (
	ListDelegatedAdministratorsXAmzTargetEnumAwsOrganizationsV20161128ListDelegatedAdministrators ListDelegatedAdministratorsXAmzTargetEnum = "AWSOrganizationsV20161128.ListDelegatedAdministrators"
)

type ListDelegatedAdministratorsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDelegatedAdministratorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDelegatedAdministratorsRequest struct {
	QueryParams ListDelegatedAdministratorsQueryParams
	Headers     ListDelegatedAdministratorsHeaders
	Request     shared.ListDelegatedAdministratorsRequest `request:"mediaType=application/json"`
}

type ListDelegatedAdministratorsResponse struct {
	AwsOrganizationsNotInUseException   *interface{}
	AccessDeniedException               *interface{}
	ConstraintViolationException        *interface{}
	ContentType                         string
	InvalidInputException               *interface{}
	ListDelegatedAdministratorsResponse *shared.ListDelegatedAdministratorsResponse
	ServiceException                    *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
	UnsupportedAPIEndpointException     *interface{}
}
