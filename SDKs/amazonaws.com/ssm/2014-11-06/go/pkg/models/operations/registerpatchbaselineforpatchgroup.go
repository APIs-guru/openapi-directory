package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterPatchBaselineForPatchGroupXAmzTargetEnum string

const (
	RegisterPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmRegisterPatchBaselineForPatchGroup RegisterPatchBaselineForPatchGroupXAmzTargetEnum = "AmazonSSM.RegisterPatchBaselineForPatchGroup"
)

type RegisterPatchBaselineForPatchGroupHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterPatchBaselineForPatchGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterPatchBaselineForPatchGroupRequest struct {
	Headers RegisterPatchBaselineForPatchGroupHeaders
	Request shared.RegisterPatchBaselineForPatchGroupRequest `request:"mediaType=application/json"`
}

type RegisterPatchBaselineForPatchGroupResponse struct {
	AlreadyExistsException                   *interface{}
	ContentType                              string
	DoesNotExistException                    *interface{}
	InternalServerError                      *interface{}
	InvalidResourceID                        *interface{}
	RegisterPatchBaselineForPatchGroupResult *shared.RegisterPatchBaselineForPatchGroupResult
	ResourceLimitExceededException           *interface{}
	StatusCode                               int64
}
