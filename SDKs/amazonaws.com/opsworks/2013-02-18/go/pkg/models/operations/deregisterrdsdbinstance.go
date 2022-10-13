package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterRdsDbInstanceXAmzTargetEnum string

const (
	DeregisterRdsDbInstanceXAmzTargetEnumOpsWorks20130218DeregisterRdsDbInstance DeregisterRdsDbInstanceXAmzTargetEnum = "OpsWorks_20130218.DeregisterRdsDbInstance"
)

type DeregisterRdsDbInstanceHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterRdsDbInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterRdsDbInstanceRequest struct {
	Headers DeregisterRdsDbInstanceHeaders
	Request shared.DeregisterRdsDbInstanceRequest `request:"mediaType=application/json"`
}

type DeregisterRdsDbInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
