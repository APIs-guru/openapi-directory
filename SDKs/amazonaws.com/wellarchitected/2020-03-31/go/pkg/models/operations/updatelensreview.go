package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLensReviewPathParams struct {
	LensAlias  string `pathParam:"style=simple,explode=false,name=LensAlias"`
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type UpdateLensReviewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateLensReviewRequestBody struct {
	LensNotes   *string           `json:"LensNotes,omitempty"`
	PillarNotes map[string]string `json:"PillarNotes,omitempty"`
}

type UpdateLensReviewRequest struct {
	PathParams UpdateLensReviewPathParams
	Headers    UpdateLensReviewHeaders
	Request    UpdateLensReviewRequestBody `request:"mediaType=application/json"`
}

type UpdateLensReviewResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateLensReviewOutput    *shared.UpdateLensReviewOutput
	ValidationException       *interface{}
}
