package operations

import (
	"openapi/pkg/models/shared"
)

type GetPatchBaselineForPatchGroupXAmzTargetEnum string

const (
	GetPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmGetPatchBaselineForPatchGroup GetPatchBaselineForPatchGroupXAmzTargetEnum = "AmazonSSM.GetPatchBaselineForPatchGroup"
)

type GetPatchBaselineForPatchGroupHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPatchBaselineForPatchGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPatchBaselineForPatchGroupRequest struct {
	Headers GetPatchBaselineForPatchGroupHeaders
	Request shared.GetPatchBaselineForPatchGroupRequest `request:"mediaType=application/json"`
}

type GetPatchBaselineForPatchGroupResponse struct {
	ContentType                         string
	GetPatchBaselineForPatchGroupResult *shared.GetPatchBaselineForPatchGroupResult
	InternalServerError                 *interface{}
	StatusCode                          int64
}
