package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInstanceCustomHealthStatusXAmzTargetEnum string

const (
	UpdateInstanceCustomHealthStatusXAmzTargetEnumRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatus UpdateInstanceCustomHealthStatusXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"
)

type UpdateInstanceCustomHealthStatusHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateInstanceCustomHealthStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
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
