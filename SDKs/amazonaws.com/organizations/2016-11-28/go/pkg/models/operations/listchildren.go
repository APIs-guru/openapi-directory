package operations

import (
	"openapi/pkg/models/shared"
)

type ListChildrenQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListChildrenXAmzTargetEnum string

const (
	ListChildrenXAmzTargetEnumAwsOrganizationsV20161128ListChildren ListChildrenXAmzTargetEnum = "AWSOrganizationsV20161128.ListChildren"
)

type ListChildrenHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListChildrenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListChildrenRequest struct {
	QueryParams ListChildrenQueryParams
	Headers     ListChildrenHeaders
	Request     shared.ListChildrenRequest `request:"mediaType=application/json"`
}

type ListChildrenResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListChildrenResponse              *shared.ListChildrenResponse
	ParentNotFoundException           *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
