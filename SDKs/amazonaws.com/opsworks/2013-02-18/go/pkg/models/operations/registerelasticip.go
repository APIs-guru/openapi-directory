package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterElasticIPXAmzTargetEnum string

const (
	RegisterElasticIPXAmzTargetEnumOpsWorks20130218RegisterElasticIP RegisterElasticIPXAmzTargetEnum = "OpsWorks_20130218.RegisterElasticIp"
)

type RegisterElasticIPHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterElasticIPXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterElasticIPRequest struct {
	Headers RegisterElasticIPHeaders
	Request shared.RegisterElasticIPRequest `request:"mediaType=application/json"`
}

type RegisterElasticIPResponse struct {
	ContentType               string
	RegisterElasticIPResult   *shared.RegisterElasticIPResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
