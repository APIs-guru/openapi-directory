package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSampleFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSampleFindingsRequestBody struct {
	FindingTypes []shared.FindingTypeEnum `json:"findingTypes"`
}

type CreateSampleFindingsRequest struct {
	Headers CreateSampleFindingsHeaders
	Request CreateSampleFindingsRequestBody `request:"mediaType=application/json"`
}

type CreateSampleFindingsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateSampleFindingsResponse  map[string]interface{}
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
