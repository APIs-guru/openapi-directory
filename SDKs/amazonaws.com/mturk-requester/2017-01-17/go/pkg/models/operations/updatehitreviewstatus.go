package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateHitReviewStatusXAmzTargetEnum string

const (
	UpdateHitReviewStatusXAmzTargetEnumMTurkRequesterServiceV20170117UpdateHitReviewStatus UpdateHitReviewStatusXAmzTargetEnum = "MTurkRequesterServiceV20170117.UpdateHITReviewStatus"
)

type UpdateHitReviewStatusHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateHitReviewStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateHitReviewStatusRequest struct {
	Headers UpdateHitReviewStatusHeaders
	Request shared.UpdateHitReviewStatusRequest `request:"mediaType=application/json"`
}

type UpdateHitReviewStatusResponse struct {
	ContentType                   string
	RequestError                  *interface{}
	ServiceFault                  *interface{}
	StatusCode                    int64
	UpdateHitReviewStatusResponse map[string]interface{}
}
