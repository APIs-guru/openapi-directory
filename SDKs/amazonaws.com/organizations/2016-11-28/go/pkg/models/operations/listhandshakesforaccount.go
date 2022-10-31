package operations

import (
	"openapi/pkg/models/shared"
)

type ListHandshakesForAccountQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListHandshakesForAccountXAmzTargetEnum string

const (
	ListHandshakesForAccountXAmzTargetEnumAwsOrganizationsV20161128ListHandshakesForAccount ListHandshakesForAccountXAmzTargetEnum = "AWSOrganizationsV20161128.ListHandshakesForAccount"
)

type ListHandshakesForAccountHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHandshakesForAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListHandshakesForAccountRequest struct {
	QueryParams ListHandshakesForAccountQueryParams
	Headers     ListHandshakesForAccountHeaders
	Request     shared.ListHandshakesForAccountRequest `request:"mediaType=application/json"`
}

type ListHandshakesForAccountResponse struct {
	AccessDeniedException            *interface{}
	ConcurrentModificationException  *interface{}
	ContentType                      string
	InvalidInputException            *interface{}
	ListHandshakesForAccountResponse *shared.ListHandshakesForAccountResponse
	ServiceException                 *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
}
