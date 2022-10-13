package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePatchBaselineXAmzTargetEnum string

const (
	UpdatePatchBaselineXAmzTargetEnumAmazonSsmUpdatePatchBaseline UpdatePatchBaselineXAmzTargetEnum = "AmazonSSM.UpdatePatchBaseline"
)

type UpdatePatchBaselineHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePatchBaselineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePatchBaselineRequest struct {
	Headers UpdatePatchBaselineHeaders
	Request shared.UpdatePatchBaselineRequest `request:"mediaType=application/json"`
}

type UpdatePatchBaselineResponse struct {
	ContentType               string
	DoesNotExistException     *interface{}
	InternalServerError       *interface{}
	StatusCode                int64
	UpdatePatchBaselineResult *shared.UpdatePatchBaselineResult
}
