package operations

import (
	"openapi/pkg/models/shared"
)

type ListInstancesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListInstancesXAmzTargetEnum string

const (
	ListInstancesXAmzTargetEnumRoute53AutoNamingV20170314ListInstances ListInstancesXAmzTargetEnum = "Route53AutoNaming_v20170314.ListInstances"
)

type ListInstancesHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListInstancesRequest struct {
	QueryParams ListInstancesQueryParams
	Headers     ListInstancesHeaders
	Request     shared.ListInstancesRequest `request:"mediaType=application/json"`
}

type ListInstancesResponse struct {
	ContentType           string
	InvalidInput          *interface{}
	ListInstancesResponse *shared.ListInstancesResponse
	ServiceNotFound       *interface{}
	StatusCode            int64
}
