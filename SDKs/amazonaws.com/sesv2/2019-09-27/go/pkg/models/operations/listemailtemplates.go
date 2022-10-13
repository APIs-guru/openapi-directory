package operations

import (
	"openapi/pkg/models/shared"
)

type ListEmailTemplatesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEmailTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListEmailTemplatesRequest struct {
	QueryParams ListEmailTemplatesQueryParams
	Headers     ListEmailTemplatesHeaders
}

type ListEmailTemplatesResponse struct {
	BadRequestException        *interface{}
	ContentType                string
	ListEmailTemplatesResponse *shared.ListEmailTemplatesResponse
	StatusCode                 int64
	TooManyRequestsException   *interface{}
}
