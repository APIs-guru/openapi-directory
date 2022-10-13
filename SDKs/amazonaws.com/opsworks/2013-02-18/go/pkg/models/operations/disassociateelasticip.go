package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateElasticIPXAmzTargetEnum string

const (
	DisassociateElasticIPXAmzTargetEnumOpsWorks20130218DisassociateElasticIP DisassociateElasticIPXAmzTargetEnum = "OpsWorks_20130218.DisassociateElasticIp"
)

type DisassociateElasticIPHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateElasticIPXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateElasticIPRequest struct {
	Headers DisassociateElasticIPHeaders
	Request shared.DisassociateElasticIPRequest `request:"mediaType=application/json"`
}

type DisassociateElasticIPResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
