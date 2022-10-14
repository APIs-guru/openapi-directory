package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFindingsFilterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFindingsFilterRequestBodyActionEnum string

const (
	CreateFindingsFilterRequestBodyActionEnumArchive CreateFindingsFilterRequestBodyActionEnum = "ARCHIVE"
	CreateFindingsFilterRequestBodyActionEnumNoop    CreateFindingsFilterRequestBodyActionEnum = "NOOP"
)

type CreateFindingsFilterRequestBodyFindingCriteria struct {
	Criterion map[string]shared.CriterionAdditionalProperties `json:"criterion,omitempty"`
}

type CreateFindingsFilterRequestBody struct {
	Action          CreateFindingsFilterRequestBodyActionEnum      `json:"action"`
	ClientToken     *string                                        `json:"clientToken,omitempty"`
	Description     *string                                        `json:"description,omitempty"`
	FindingCriteria CreateFindingsFilterRequestBodyFindingCriteria `json:"findingCriteria"`
	Name            string                                         `json:"name"`
	Position        *int64                                         `json:"position,omitempty"`
	Tags            map[string]string                              `json:"tags,omitempty"`
}

type CreateFindingsFilterRequest struct {
	Headers CreateFindingsFilterHeaders
	Request CreateFindingsFilterRequestBody `request:"mediaType=application/json"`
}

type CreateFindingsFilterResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateFindingsFilterResponse  *shared.CreateFindingsFilterResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
