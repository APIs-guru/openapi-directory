package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceXAmzTargetEnum string

const (
	GetInstanceXAmzTargetEnumRoute53AutoNamingV20170314GetInstance GetInstanceXAmzTargetEnum = "Route53AutoNaming_v20170314.GetInstance"
)

type GetInstanceHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
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
