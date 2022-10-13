package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterPatchBaselineForPatchGroupXAmzTargetEnum string

const (
	DeregisterPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmDeregisterPatchBaselineForPatchGroup DeregisterPatchBaselineForPatchGroupXAmzTargetEnum = "AmazonSSM.DeregisterPatchBaselineForPatchGroup"
)

type DeregisterPatchBaselineForPatchGroupHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterPatchBaselineForPatchGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterPatchBaselineForPatchGroupRequest struct {
	Headers DeregisterPatchBaselineForPatchGroupHeaders
	Request shared.DeregisterPatchBaselineForPatchGroupRequest `request:"mediaType=application/json"`
}

type DeregisterPatchBaselineForPatchGroupResponse struct {
	ContentType                                string
	DeregisterPatchBaselineForPatchGroupResult *shared.DeregisterPatchBaselineForPatchGroupResult
	InternalServerError                        *interface{}
	InvalidResourceID                          *interface{}
	StatusCode                                 int64
}
