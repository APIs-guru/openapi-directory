package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterElasticIPXAmzTargetEnum string

const (
	DeregisterElasticIPXAmzTargetEnumOpsWorks20130218DeregisterElasticIP DeregisterElasticIPXAmzTargetEnum = "OpsWorks_20130218.DeregisterElasticIp"
)

type DeregisterElasticIPHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterElasticIPXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterElasticIPRequest struct {
	Headers DeregisterElasticIPHeaders
	Request shared.DeregisterElasticIPRequest `request:"mediaType=application/json"`
}

type DeregisterElasticIPResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
