package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceDelegatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListResourceDelegatesXAmzTargetEnum string

const (
	ListResourceDelegatesXAmzTargetEnumWorkMailServiceListResourceDelegates ListResourceDelegatesXAmzTargetEnum = "WorkMailService.ListResourceDelegates"
)

type ListResourceDelegatesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourceDelegatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListResourceDelegatesRequest struct {
	QueryParams ListResourceDelegatesQueryParams
	Headers     ListResourceDelegatesHeaders
	Request     shared.ListResourceDelegatesRequest `request:"mediaType=application/json"`
}

type ListResourceDelegatesResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	EntityStateException          *interface{}
	InvalidParameterException     *interface{}
	ListResourceDelegatesResponse *shared.ListResourceDelegatesResponse
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
