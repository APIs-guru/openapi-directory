package operations

import (
	"openapi/pkg/models/shared"
)

type ListRetirableGrantsXAmzTargetEnum string

const (
	ListRetirableGrantsXAmzTargetEnumTrentServiceListRetirableGrants ListRetirableGrantsXAmzTargetEnum = "TrentService.ListRetirableGrants"
)

type ListRetirableGrantsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRetirableGrantsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRetirableGrantsRequest struct {
	Headers ListRetirableGrantsHeaders
	Request shared.ListRetirableGrantsRequest `request:"mediaType=application/json"`
}

type ListRetirableGrantsResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	InvalidMarkerException     *interface{}
	KmsInternalException       *interface{}
	ListGrantsResponse         *shared.ListGrantsResponse
	NotFoundException          *interface{}
	StatusCode                 int64
}
