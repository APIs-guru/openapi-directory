package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoverInstancesXAmzTargetEnum string

const (
	DiscoverInstancesXAmzTargetEnumRoute53AutoNamingV20170314DiscoverInstances DiscoverInstancesXAmzTargetEnum = "Route53AutoNaming_v20170314.DiscoverInstances"
)

type DiscoverInstancesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DiscoverInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DiscoverInstancesRequest struct {
	Headers DiscoverInstancesHeaders
	Request shared.DiscoverInstancesRequest `request:"mediaType=application/json"`
}

type DiscoverInstancesResponse struct {
	ContentType               string
	DiscoverInstancesResponse *shared.DiscoverInstancesResponse
	InvalidInput              *interface{}
	NamespaceNotFound         *interface{}
	RequestLimitExceeded      *interface{}
	ServiceNotFound           *interface{}
	StatusCode                int64
}
