package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateElasticIPXAmzTargetEnum string

const (
	UpdateElasticIPXAmzTargetEnumOpsWorks20130218UpdateElasticIP UpdateElasticIPXAmzTargetEnum = "OpsWorks_20130218.UpdateElasticIp"
)

type UpdateElasticIPHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateElasticIPXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateElasticIPRequest struct {
	Headers UpdateElasticIPHeaders
	Request shared.UpdateElasticIPRequest `request:"mediaType=application/json"`
}

type UpdateElasticIPResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
