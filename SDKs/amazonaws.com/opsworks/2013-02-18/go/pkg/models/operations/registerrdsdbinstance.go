package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterRdsDbInstanceXAmzTargetEnum string

const (
	RegisterRdsDbInstanceXAmzTargetEnumOpsWorks20130218RegisterRdsDbInstance RegisterRdsDbInstanceXAmzTargetEnum = "OpsWorks_20130218.RegisterRdsDbInstance"
)

type RegisterRdsDbInstanceHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterRdsDbInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
