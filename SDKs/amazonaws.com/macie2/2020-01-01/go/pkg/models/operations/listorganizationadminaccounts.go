package operations

import (
	"openapi/pkg/models/shared"
)

type ListOrganizationAdminAccountsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListOrganizationAdminAccountsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListOrganizationAdminAccountsRequest struct {
	QueryParams ListOrganizationAdminAccountsQueryParams
	Headers     ListOrganizationAdminAccountsHeaders
}

type ListOrganizationAdminAccountsResponse struct {
	AccessDeniedException                 *interface{}
	ConflictException                     *interface{}
	ContentType                           string
	InternalServerException               *interface{}
	ListOrganizationAdminAccountsResponse *shared.ListOrganizationAdminAccountsResponse
	ResourceNotFoundException             *interface{}
	ServiceQuotaExceededException         *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}
