package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLensReviewPathParams struct {
	LensAlias  string `pathParam:"style=simple,explode=false,name=LensAlias"`
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type UpdateLensReviewHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
