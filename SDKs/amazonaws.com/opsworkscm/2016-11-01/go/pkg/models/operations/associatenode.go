package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateNodeXAmzTargetEnum string

const (
	AssociateNodeXAmzTargetEnumOpsWorksCmV20161101AssociateNode AssociateNodeXAmzTargetEnum = "OpsWorksCM_V2016_11_01.AssociateNode"
)

type AssociateNodeHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateNodeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateNodeRequest struct {
	Headers AssociateNodeHeaders
	Request shared.AssociateNodeRequest `request:"mediaType=application/json"`
}

type AssociateNodeResponse struct {
	AssociateNodeResponse     *shared.AssociateNodeResponse
	ContentType               string
	InvalidStateException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
