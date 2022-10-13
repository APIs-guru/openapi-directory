package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstancesHealthStatusQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetInstancesHealthStatusXAmzTargetEnum string

const (
	GetInstancesHealthStatusXAmzTargetEnumRoute53AutoNamingV20170314GetInstancesHealthStatus GetInstancesHealthStatusXAmzTargetEnum = "Route53AutoNaming_v20170314.GetInstancesHealthStatus"
)

type GetInstancesHealthStatusHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstancesHealthStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInstancesHealthStatusRequest struct {
	QueryParams GetInstancesHealthStatusQueryParams
	Headers     GetInstancesHealthStatusHeaders
	Request     shared.GetInstancesHealthStatusRequest `request:"mediaType=application/json"`
}

type GetInstancesHealthStatusResponse struct {
	ContentType                      string
	GetInstancesHealthStatusResponse *shared.GetInstancesHealthStatusResponse
	InstanceNotFound                 *interface{}
	InvalidInput                     *interface{}
	ServiceNotFound                  *interface{}
	StatusCode                       int64
}
