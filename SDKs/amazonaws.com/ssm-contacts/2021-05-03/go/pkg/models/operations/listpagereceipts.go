package operations

import (
	"openapi/pkg/models/shared"
)

type ListPageReceiptsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPageReceiptsXAmzTargetEnum string

const (
	ListPageReceiptsXAmzTargetEnumSsmContactsListPageReceipts ListPageReceiptsXAmzTargetEnum = "SSMContacts.ListPageReceipts"
)

type ListPageReceiptsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPageReceiptsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPageReceiptsRequest struct {
	QueryParams ListPageReceiptsQueryParams
	Headers     ListPageReceiptsHeaders
	Request     shared.ListPageReceiptsRequest `request:"mediaType=application/json"`
}

type ListPageReceiptsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListPageReceiptsResult    *shared.ListPageReceiptsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
