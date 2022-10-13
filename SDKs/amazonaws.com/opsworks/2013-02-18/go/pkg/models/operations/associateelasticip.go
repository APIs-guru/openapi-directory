package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateElasticIPXAmzTargetEnum string

const (
	AssociateElasticIPXAmzTargetEnumOpsWorks20130218AssociateElasticIP AssociateElasticIPXAmzTargetEnum = "OpsWorks_20130218.AssociateElasticIp"
)

type AssociateElasticIPHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateElasticIPXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateElasticIPRequest struct {
	Headers AssociateElasticIPHeaders
	Request shared.AssociateElasticIPRequest `request:"mediaType=application/json"`
}

type AssociateElasticIPResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
