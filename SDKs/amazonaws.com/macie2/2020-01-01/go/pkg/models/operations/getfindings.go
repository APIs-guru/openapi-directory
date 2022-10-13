package operations

import (
	"openapi/pkg/models/shared"
)

type GetFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFindingsRequestBodySortCriteria struct {
	AttributeName *string             `json:"attributeName"`
	OrderBy       *shared.OrderByEnum `json:"orderBy"`
}

type GetFindingsRequestBody struct {
	FindingIds   []string                            `json:"findingIds"`
	SortCriteria *GetFindingsRequestBodySortCriteria `json:"sortCriteria"`
}

type GetFindingsRequest struct {
	Headers GetFindingsHeaders
	Request GetFindingsRequestBody `request:"mediaType=application/json"`
}

type GetFindingsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	GetFindingsResponse           *shared.GetFindingsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
