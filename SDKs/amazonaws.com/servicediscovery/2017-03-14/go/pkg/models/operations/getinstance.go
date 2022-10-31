package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceXAmzTargetEnum string

const (
	GetInstanceXAmzTargetEnumRoute53AutoNamingV20170314GetInstance GetInstanceXAmzTargetEnum = "Route53AutoNaming_v20170314.GetInstance"
)

type GetInstanceHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetInstanceRequest struct {
	Headers GetInstanceHeaders
	Request shared.GetInstanceRequest `request:"mediaType=application/json"`
}

type GetInstanceResponse struct {
	ContentType         string
	GetInstanceResponse *shared.GetInstanceResponse
	InstanceNotFound    *interface{}
	InvalidInput        *interface{}
	ServiceNotFound     *interface{}
	StatusCode          int64
}
