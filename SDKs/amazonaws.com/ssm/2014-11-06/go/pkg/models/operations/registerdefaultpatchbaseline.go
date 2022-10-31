package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterDefaultPatchBaselineXAmzTargetEnum string

const (
	RegisterDefaultPatchBaselineXAmzTargetEnumAmazonSsmRegisterDefaultPatchBaseline RegisterDefaultPatchBaselineXAmzTargetEnum = "AmazonSSM.RegisterDefaultPatchBaseline"
)

type RegisterDefaultPatchBaselineHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterDefaultPatchBaselineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterDefaultPatchBaselineRequest struct {
	Headers RegisterDefaultPatchBaselineHeaders
	Request shared.RegisterDefaultPatchBaselineRequest `request:"mediaType=application/json"`
}

type RegisterDefaultPatchBaselineResponse struct {
	ContentType                        string
	DoesNotExistException              *interface{}
	InternalServerError                *interface{}
	InvalidResourceID                  *interface{}
	RegisterDefaultPatchBaselineResult *shared.RegisterDefaultPatchBaselineResult
	StatusCode                         int64
}
