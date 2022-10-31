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
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDelegatedAdministratorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
