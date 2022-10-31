package operations

import (
	"openapi/pkg/models/shared"
)

type GetPatchBaselineXAmzTargetEnum string

const (
	GetPatchBaselineXAmzTargetEnumAmazonSsmGetPatchBaseline GetPatchBaselineXAmzTargetEnum = "AmazonSSM.GetPatchBaseline"
)

type GetPatchBaselineHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPatchBaselineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetPatchBaselineRequest struct {
	Headers GetPatchBaselineHeaders
	Request shared.GetPatchBaselineRequest `request:"mediaType=application/json"`
}

type GetPatchBaselineResponse struct {
	ContentType            string
	DoesNotExistException  *interface{}
	GetPatchBaselineResult *shared.GetPatchBaselineResult
	InternalServerError    *interface{}
	InvalidResourceID      *interface{}
	StatusCode             int64
}
