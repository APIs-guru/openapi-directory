package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccountsForParentQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAccountsForParentXAmzTargetEnum string

const (
	ListAccountsForParentXAmzTargetEnumAwsOrganizationsV20161128ListAccountsForParent ListAccountsForParentXAmzTargetEnum = "AWSOrganizationsV20161128.ListAccountsForParent"
)

type ListAccountsForParentHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccountsForParentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAccountsForParentRequest struct {
	QueryParams ListAccountsForParentQueryParams
	Headers     ListAccountsForParentHeaders
	Request     shared.ListAccountsForParentRequest `request:"mediaType=application/json"`
}

type ListAccountsForParentResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListAccountsForParentResponse     *shared.ListAccountsForParentResponse
	ParentNotFoundException           *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
