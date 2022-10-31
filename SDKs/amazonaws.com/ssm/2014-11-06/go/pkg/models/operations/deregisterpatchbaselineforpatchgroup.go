package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterPatchBaselineForPatchGroupXAmzTargetEnum string

const (
	DeregisterPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmDeregisterPatchBaselineForPatchGroup DeregisterPatchBaselineForPatchGroupXAmzTargetEnum = "AmazonSSM.DeregisterPatchBaselineForPatchGroup"
)

type DeregisterPatchBaselineForPatchGroupHeaders struct {
	XAmzAlgorithm     *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterPatchBaselineForPatchGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
