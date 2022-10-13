package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRdsDbInstanceXAmzTargetEnum string

const (
	UpdateRdsDbInstanceXAmzTargetEnumOpsWorks20130218UpdateRdsDbInstance UpdateRdsDbInstanceXAmzTargetEnum = "OpsWorks_20130218.UpdateRdsDbInstance"
)

type UpdateRdsDbInstanceHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRdsDbInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRdsDbInstanceRequest struct {
	Headers UpdateRdsDbInstanceHeaders
	Request shared.UpdateRdsDbInstanceRequest `request:"mediaType=application/json"`
}

type UpdateRdsDbInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
