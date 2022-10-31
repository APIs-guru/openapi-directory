package operations

import (
	"openapi/pkg/models/shared"
)

type ListContactsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListContactsXAmzTargetEnum string

const (
	ListContactsXAmzTargetEnumSsmContactsListContacts ListContactsXAmzTargetEnum = "SSMContacts.ListContacts"
)

type ListContactsHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListContactsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListContactsRequest struct {
	QueryParams ListContactsQueryParams
	Headers     ListContactsHeaders
	Request     shared.ListContactsRequest `request:"mediaType=application/json"`
}

type ListContactsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListContactsResult      *shared.ListContactsResult
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
