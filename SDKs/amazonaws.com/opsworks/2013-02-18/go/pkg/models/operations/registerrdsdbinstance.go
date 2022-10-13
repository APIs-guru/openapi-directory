package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterRdsDbInstanceXAmzTargetEnum string

const (
	RegisterRdsDbInstanceXAmzTargetEnumOpsWorks20130218RegisterRdsDbInstance RegisterRdsDbInstanceXAmzTargetEnum = "OpsWorks_20130218.RegisterRdsDbInstance"
)

type RegisterRdsDbInstanceHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterRdsDbInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterRdsDbInstanceRequest struct {
	Headers RegisterRdsDbInstanceHeaders
	Request shared.RegisterRdsDbInstanceRequest `request:"mediaType=application/json"`
}

type RegisterRdsDbInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
