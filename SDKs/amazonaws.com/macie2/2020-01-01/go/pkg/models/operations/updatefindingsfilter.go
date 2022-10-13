package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFindingsFilterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateFindingsFilterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFindingsFilterRequestBodyActionEnum string

const (
	UpdateFindingsFilterRequestBodyActionEnumArchive UpdateFindingsFilterRequestBodyActionEnum = "ARCHIVE"
	UpdateFindingsFilterRequestBodyActionEnumNoop    UpdateFindingsFilterRequestBodyActionEnum = "NOOP"
)

type UpdateFindingsFilterRequestBodyFindingCriteria struct {
	Criterion map[string]shared.CriterionAdditionalProperties `json:"criterion"`
}

type UpdateFindingsFilterRequestBody struct {
	Action          *UpdateFindingsFilterRequestBodyActionEnum      `json:"action"`
	ClientToken     *string                                         `json:"clientToken"`
	Description     *string                                         `json:"description"`
	FindingCriteria *UpdateFindingsFilterRequestBodyFindingCriteria `json:"findingCriteria"`
	Name            *string                                         `json:"name"`
	Position        *int64                                          `json:"position"`
}

type UpdateFindingsFilterRequest struct {
	PathParams UpdateFindingsFilterPathParams
	Headers    UpdateFindingsFilterHeaders
	Request    UpdateFindingsFilterRequestBody `request:"mediaType=application/json"`
}

type UpdateFindingsFilterResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateFindingsFilterResponse  *shared.UpdateFindingsFilterResponse
	ValidationException           *interface{}
}
