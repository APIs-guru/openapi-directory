package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInstanceCustomHealthStatusXAmzTargetEnum string

const (
	UpdateInstanceCustomHealthStatusXAmzTargetEnumRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatus UpdateInstanceCustomHealthStatusXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"
)

type UpdateInstanceCustomHealthStatusHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateInstanceCustomHealthStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateInstanceCustomHealthStatusRequest struct {
	Headers UpdateInstanceCustomHealthStatusHeaders
	Request shared.UpdateInstanceCustomHealthStatusRequest `request:"mediaType=application/json"`
}

type UpdateInstanceCustomHealthStatusResponse struct {
	ContentType          string
	CustomHealthNotFound *interface{}
	InstanceNotFound     *interface{}
	InvalidInput         *interface{}
	ServiceNotFound      *interface{}
	StatusCode           int64
}
