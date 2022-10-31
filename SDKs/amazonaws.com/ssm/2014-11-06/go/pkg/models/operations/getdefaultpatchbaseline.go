package operations

import (
	"openapi/pkg/models/shared"
)

type GetDefaultPatchBaselineXAmzTargetEnum string

const (
	GetDefaultPatchBaselineXAmzTargetEnumAmazonSsmGetDefaultPatchBaseline GetDefaultPatchBaselineXAmzTargetEnum = "AmazonSSM.GetDefaultPatchBaseline"
)

type GetDefaultPatchBaselineHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDefaultPatchBaselineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDefaultPatchBaselineRequest struct {
	Headers GetDefaultPatchBaselineHeaders
	Request shared.GetDefaultPatchBaselineRequest `request:"mediaType=application/json"`
}

type GetDefaultPatchBaselineResponse struct {
	ContentType                   string
	GetDefaultPatchBaselineResult *shared.GetDefaultPatchBaselineResult
	InternalServerError           *interface{}
	StatusCode                    int64
}
