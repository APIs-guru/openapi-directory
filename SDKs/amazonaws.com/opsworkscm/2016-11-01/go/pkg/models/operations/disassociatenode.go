package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateNodeXAmzTargetEnum string

const (
	DisassociateNodeXAmzTargetEnumOpsWorksCmV20161101DisassociateNode DisassociateNodeXAmzTargetEnum = "OpsWorksCM_V2016_11_01.DisassociateNode"
)

type DisassociateNodeHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateNodeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateNodeRequest struct {
	Headers DisassociateNodeHeaders
	Request shared.DisassociateNodeRequest `request:"mediaType=application/json"`
}

type DisassociateNodeResponse struct {
	ContentType               string
	DisassociateNodeResponse  *shared.DisassociateNodeResponse
	InvalidStateException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
