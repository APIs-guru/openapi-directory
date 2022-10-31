package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePatchBaselineXAmzTargetEnum string

const (
	UpdatePatchBaselineXAmzTargetEnumAmazonSsmUpdatePatchBaseline UpdatePatchBaselineXAmzTargetEnum = "AmazonSSM.UpdatePatchBaseline"
)

type UpdatePatchBaselineHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePatchBaselineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
