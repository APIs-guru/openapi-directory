package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePatchBaselineXAmzTargetEnum string

const (
	DeletePatchBaselineXAmzTargetEnumAmazonSsmDeletePatchBaseline DeletePatchBaselineXAmzTargetEnum = "AmazonSSM.DeletePatchBaseline"
)

type DeletePatchBaselineHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePatchBaselineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePatchBaselineRequest struct {
	Headers DeletePatchBaselineHeaders
	Request shared.DeletePatchBaselineRequest `request:"mediaType=application/json"`
}

type DeletePatchBaselineResponse struct {
	ContentType               string
	DeletePatchBaselineResult *shared.DeletePatchBaselineResult
	InternalServerError       *interface{}
	ResourceInUseException    *interface{}
	StatusCode                int64
}
